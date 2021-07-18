import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import FeedInputOptions from './FeedInputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { useState,useEffect } from 'react';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import FlipMove from 'react-flip-move';


const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [input ,setInput] = useState('');

    const user = useSelector(selectUser);

    useEffect(() => {

        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => {
                return (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )
            }))
        ))  

    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')

    }

    return (
        <div className="feed">

            <div className="create_post">
                <div className="input">
                    <CreateIcon />

                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}>

                        </input>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>

                </div>

                <div className="add_ons">
                    <FeedInputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <FeedInputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <FeedInputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <FeedInputOptions title="Write an article" Icon={CalendarViewDayIcon} color="#7DC15E" />

                </div>
            </div>

            <FlipMove>

            {posts.map(({ id, data:{ name, description,message,photoUrl} }) => {
                return (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                )
            })}
                
            </FlipMove>

            {/* <Post name={user.name} description={user.description} message={user.message} photoUrl={user.photoUrl}></Post> */}




        </div>
    )
}

export default Feed

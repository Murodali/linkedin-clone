import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem =(topic) => {
        return(
            <div className="sidebar_recentItem">
    
            <p>#{topic}</p>
        </div>
        )

    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="images/background.jpg" alt="avatar" />

                <Avatar src={user.photoUrl}className="sidebar_avatar"> {user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="stat_number">3434</p>

                    </div>

                    <div className="sidebar_stat">
                        <p>Views on post</p>
                        <p className="stat_number">3434</p>

                    </div>

                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("sofware engineering")}
                {recentItem("sofware engineering")}
                {recentItem("sofware engineering")}
                {recentItem("sofware engineering")}
                {recentItem("sofware engineering")}

            </div>

        </div>
    )
}

export default Sidebar;

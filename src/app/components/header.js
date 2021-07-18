import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';





const Header = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutApp = () => {
        dispatch(logout());
        auth.signOut();

    }


    return (
        <div className="header">

            <div className="header_left">
                <img src="images/linkedin.svg" alt="img"></img>

                <div className="header_search">
                    <SearchIcon></SearchIcon>
                    <input type="text" placeholder="Search "></input>
                </div>
            </div>
            
            <div className="header_right">

                <HeaderOptions Icon={HomeIcon} title="Home"></HeaderOptions>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"></HeaderOptions>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"></HeaderOptions>
                <HeaderOptions Icon={ChatIcon} title="Messaging"></HeaderOptions>
                <HeaderOptions Icon={NotificationsIcon} title="Notfications"></HeaderOptions>
                <HeaderOptions avatar ={true} title="me" out="SingOut" onClick={logoutApp}></HeaderOptions>
           
            </div>
            
        </div>
    )
}

export default Header

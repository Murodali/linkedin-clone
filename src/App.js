import React from 'react';
import './App.css';
import Feed from './app/components/Feed';
import Header from './app/components/header';
import Sidebar from './app/components/Siderber';
import { login, logout, selectUser } from './features/counter/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from './app/components/Login';
import { auth } from './firebase';
import {useEffect} from 'react';
import Widgets from './app/components/Widgets';


function App() {

 const user = useSelector(selectUser)
 const dispatch = useDispatch();


 useEffect(() => {

  auth.onAuthStateChanged(userAuth => {
    if(userAuth){
      dispatch(login({
        email:userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      }))

    }
    else {

      dispatch(logout());

    }
  })

 }, [])

  return (
    <div className="App">
      <Header></Header>

      {!user ?  ( 
      <Login/> )
    : (
      <div className="app_body">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widgets></Widgets>
      
      </div>
    ) }

     
    </div>
  );
}

export default App;

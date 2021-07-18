import React from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'


const HeaderOptions = ({avatar,Icon,title, onClick }) => {

    const user = useSelector(selectUser)



    {user? console.log("user loaded") : console.log("user not loaded")}

    return (
        <div onClick = {onClick} className="header_options">

            {Icon && <Icon cassName="headerOption_icon" /> }

        
            {avatar && (
     <Avatar src={user?.photoUrl}></Avatar>
            )}

                   
  

  

            
            <h3>{title}</h3>
        
        </div>
    )
}

export default HeaderOptions

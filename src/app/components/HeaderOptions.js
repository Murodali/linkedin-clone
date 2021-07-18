import React from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'

const HeaderOptions = ({avatar,Icon,title, onClick }) => {
    const user = useSelector(selectUser);
    return (
        <div onClick = {onClick} className="header_options">

            {Icon && <Icon cassName="headerOption_icon" /> }
            {avatar && (
                <Avatar className="headerOption_icon" > {user?.email[0]} </Avatar>

            ) }
            <h3>{title}</h3>
        
        </div>
    )
}

export default HeaderOptions

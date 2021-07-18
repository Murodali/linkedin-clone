import React from 'react'

function FeedInputOptions({Icon,title,color}) {
    return (
        <div className="input_Option">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
            
        </div>
    )
}

export default FeedInputOptions

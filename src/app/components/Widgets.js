import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecordRounded } from '@material-ui/icons';

function Widgets() {


    const newsArticles =(heading,subtitle) => {
        return (
            <div className="widgets_article">
            <div className="widgets_articles_left">
                <FiberManualRecordRounded></FiberManualRecordRounded>
             
            </div>
            <div className="widgets_articles_right">
            <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
        )

    }

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>

            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
            {newsArticles("Murodali is back","Top News")}
        </div>
    )
}

export default Widgets

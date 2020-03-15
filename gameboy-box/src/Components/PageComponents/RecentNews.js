import React from 'react'
import '../Styles/RecentNews.scss'


const RecentNews = (props) => {
    return (
        <div className='recent-news-container'>
            <div className='recentNewsTitle'>
                <h3>RECENT NEW ROMS HACKS</h3>
                <p>MORE</p>
            </div>
            <div className='roms-container'>
                {props.children}
            </div>
        </div>
    )
}


export default RecentNews
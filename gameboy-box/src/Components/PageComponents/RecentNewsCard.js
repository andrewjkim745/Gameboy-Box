import React from 'react'
import '../Styles/RecentNewsCard.scss'



const RecentNewsCard = (props) => {
    return (
        <div className='recentNewsCardContainer'>
            <div className='romImage-container'>
                <img src={props.image}></img>
            </div>
            <div className='rom-container'>
                <h2>{props.romName}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default RecentNewsCard
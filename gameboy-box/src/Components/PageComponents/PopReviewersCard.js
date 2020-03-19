import React from 'react'
import '../Styles/PopReviewersCard.scss'



const PopReviewersCard = (props) => {
    return (
        <div className='reviewerContainer'>
            <div className='reviewerImage'>
                <img src={props.image}></img>
            </div>
            <div className='reviewerDataContainer'>
                <h4>{props.username}</h4>
                <h6>{props.games} games, {props.reviews} reviews</h6>
            </div>
        </div>
    )
}


export default PopReviewersCard
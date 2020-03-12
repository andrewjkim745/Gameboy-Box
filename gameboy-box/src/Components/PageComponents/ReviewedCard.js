import React from 'react'
import '../Styles/ReviewedCard.scss'



const ReviewedCard = (props) => {
    return (
        <div className='reviewed-container'>
            <img src={props.src}></img>
        </div>
    )
}

export default ReviewedCard
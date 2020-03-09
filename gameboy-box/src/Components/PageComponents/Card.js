import React from 'react'
import '../Styles/Card.css'




const Card = (props) => {
    return (
    <div className='card' onMouseEnter = {props.onMouseEnter} onMouseLeave= {props.onMouseLeave}>
        <img className='card-image' src={props.image}></img>
        {props.children}
        {props.renderVotesRatings}

    </div>
    )
}



export default Card



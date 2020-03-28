import React from 'react'
import { FaComment, FaHeart } from 'react-icons/fa'
import '../Styles/BottomLeftCard.scss'
import StarRatingComponent from 'react-star-rating-component';


const BottomLeftCard = (props) => {
    return (
        <div className='bottom-card-container'>
            <div className='bottom-image-container'>
                <img src={props.image}></img>
            </div>
            <div className='bottom-card-right-container'>
                <div className='title-date'>
                    <h3>{props.title}</h3>
                    <h4>{props.date}</h4>
                </div>
                <div className='user-rating'>
                    <div>
                        <img src={props.src2}></img>
                    </div>
                    <h5>{props.user}</h5>
                    <StarRatingComponent
                        name={'hello'}
                        starCount={props.rating}
                        emptyStarColor={'green'}
                    />
                    <FaComment />
                    <p>{props.commentCount}</p>
                </div>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
                <div className='favorites'>
                    <FaHeart />
                    <p>{props.likes} likes</p>
                </div>
            </div>
        </div>
    )
}

export default BottomLeftCard
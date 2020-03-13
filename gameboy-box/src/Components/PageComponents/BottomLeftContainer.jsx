import React from 'react'
import FaComment from 'react-icons/fa'
import FaHeart from 'react-icons/fa'






const BottomLeftCard = (props) => {
    return (
        <div>
            <div>
                <div>
                <img src={props.src}></img>
                </div>
                <div>
                    <div className='title-date'>
                        <h3>{props.title}</h3>
                        <h4>{props.date}</h4>
                    </div>
                    <div className='user-rating'>
                        <div>
                            <img src={props.src2}></img>
                        </div>
                        <h5>{props.user}</h5>
                        <FaComment/>
                        <p>{props.commentCount}</p>
                    </div>
                    <div className='description'>
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <FaHeart/>
                        <p>{props.likes} likes</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
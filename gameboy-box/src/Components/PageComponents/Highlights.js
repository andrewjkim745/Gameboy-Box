import React from 'react'
import '../Styles/Highlights.scss'



const Highlights = (props) => {
    return (
        <div className='highlight-card'>
            <div className='image-container'>
                <div>
                    <img src={props.src}></img>
                </div>
            </div>
            <div className='highlight-text'>
                <p>{props.text}</p>
            </div>
        </div>

    )
}


export default Highlights
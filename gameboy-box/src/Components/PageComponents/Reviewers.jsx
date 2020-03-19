import React from 'react'
import '../Styles/Reviewers.scss'



const popReviewers = (props) => {
    return (
        <div className='popReviewersContainer'>
            <div className='popReviewersTitle'>
                <h3>POPULAR REVIEWERS</h3>
                <p>MORE</p>
            </div>
            <div className='popReviewersInfo'>
                {props.children}
            </div>
        </div>
    )
}

export default popReviewers
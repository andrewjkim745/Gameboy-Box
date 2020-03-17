import React from 'react'



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
import React from 'react'
import Card from './Card'
import '../Styles/Lists.scss'




const Lists = (props) => {
    return (
        <div className='lists-container'>
            <div className='lists-title'>
                <h2>POPULAR LISTS</h2>
                <p>MORE</p>
            </div>
            <div className='parent-container'>
                {props.children}
            </div>
        </div>
    )
}

export default Lists
import React from 'react'
import './Styles/backdrop.scss'


const Backdrop = (props) => {
    return (
        <div className='backdrop-container'>
            <div className='backdropImageContainer'>
                <div className='backdropImage'></div>
            </div>
            {props.children}
        </div>
    )
}

export default Backdrop
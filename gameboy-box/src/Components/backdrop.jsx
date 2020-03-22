import React from 'react'
import './Styles/backdrop.scss'


const Backdrop = (props) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop'></div>
            {props.children}
        </div>
    )
}

export default Backdrop
import React from 'react' 
import '../Styles/AboutDescriptions.scss'




const AboutDescriptions = (props) => {
    return (
        <div className='aboutDescriptions'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}

export default AboutDescriptions 
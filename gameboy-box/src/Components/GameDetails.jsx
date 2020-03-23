import React from 'react'
import { NavLink } from 'react-router-dom'



const GameDetails = (props) => {
    return (
        <div className='gameDetailsContainer'>
            <div className='firstColumn'>
                <img src={props.src}></img>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
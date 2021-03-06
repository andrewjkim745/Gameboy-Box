import React from 'react'
import './Styles/GameDetails.scss'



const GameDetails = (props) => {
    console.log(props.location.game)
    return (
        <div className='gameDetailsContainer'>
            <div className='firstColumn'>
                <img src={props.location.game.image}></img>
                <div>
                    <img src='https://i.imgur.com/rXfPua4.png'></img>
                    {/* <p>{props.views}</p> */}
                    <img src='https://i.imgur.com/7eYqP1x.png'></img>
                    {/* <p>{props.lists}</p> */}
                    <img src='https://i.imgur.com/1aiORiI.png'></img>
                    {/* <p>{props.favorites}</p> */}
                    <img src='https://i.imgur.com/j9Gr6GR.png'></img>
                    {/* <p>{props.ranking[0]}</p> */}
                </div>
            </div>
        </div>
    )
}

export default GameDetails
import React from 'react'
import './Styles/Landing.scss'



class Landing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }




    render() {
        return (
            <>
                <div className='backdrop-container'>
                    <div className='backdrop'></div>
                </div>
                <div className='landing-quote'>
                    <h2>Track Games you've played</h2>
                    <br></br>
                    <h2>Save games you want to play</h2>
                    <br></br>
                    <h2>Tell your friends what's good.</h2>
                    <a>GET STARTED - IT'S FREE</a>
                    <div className='platforms'>
                        <p className='social'>The social network for classic GBA lovers. Also available on </p>
                        <img src='https://i.imgur.com/6eO3w1V.png'></img>
                        <img src='https://i.imgur.com/lVE3fWI.png'></img>
                    </div>
                    
                </div>
            </>
        )
    }
}


export default Landing 
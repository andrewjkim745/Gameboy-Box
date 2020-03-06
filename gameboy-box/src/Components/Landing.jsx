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
            </div>
            </>
        )
    }
}


export default Landing 
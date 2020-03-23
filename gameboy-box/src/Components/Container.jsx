import React from 'react'
import Routes from './Routes'
import NavBar from './NavBar'
import Backdrop from './Backdrop'
import Footer from './Footer'



export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: []
        }
    }


    render() {
        return (
            <Backdrop>
                <NavBar/>
                <Routes/>
                {/* <div className='footer-container'> */}
                <Footer/>
                {/* </div> */}
            </Backdrop>
        )
    }
}
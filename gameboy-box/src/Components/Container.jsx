import React from 'react'
import Routes from './Routes'
import Navbar from './NavBar'
import Backdrop from './Backdrop'
import Footer from './Footer'



export default class Container extends Component {
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
                <Navbar/>
                <Routes/>
                <Footer/>
            </Backdrop>
        )
    }
}
import React from 'react'
import './Styles/NavBar.scss'
import { IoIosMenu } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            windowSize: null
        }
    }

    componentDidMount = () => {
        window.addEventListener('Resize', this.handleResize())
        console.log(this.state.windowSize)
    }
    componentWillUnmount = () => {
        window.removeEventListener('Resize', this.handleResize())
    }

    handleResize = (e) => {
        this.setState({
            windowSize: window.innerWidth
        })
    }
    renderNav = () => {
        return (
            <div className='nav-links'>
                <p>SIGN IN</p>
                <p>CREATE ACCOUNT</p>
                <p>FILMS</p>
                <p>LISTS</p>
                <p>PEOPLE</p>
                <div className='search-bar'><input></input><FiSearch /></div>
            </div>
        )
    }
    renderMobileNav = () => {
        return (
            <div>
                <h2>Gameboxd</h2>
                <IoIosMenu />
            </div>
        )
    }


    render() {
        return (
            <div className='nav-container' >
                <div className='nav-bar'>
                    <div className='title'>
                        <img className='logo' src='https://i.imgur.com/PdBoInC.png'></img>
                        <h2>Gameboyboxd</h2>
                    </div>
                    {this.state.windowSize < 425 ? this.renderMobileNav() : this.renderNav()}
                </div>
            </div>
        )
    }

}



export default NavBar

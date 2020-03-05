import React from 'react'
import  { FiSearch } from 'react-icons/fi'
import './Styles/NavBar.scss'


const NavBar = (props) => {
    return (
    <div className='nav-container'>
        <div className='nav-bar'>
        <div className='title'>
        <img className='logo' src='https://static.thenounproject.com/png/28679-200.png'></img>
        <h2>Gameboyboxd</h2>
        </div>
        <div className='nav-links'>
            <p>SIGN IN</p>
            <p>CREATE ACCOUNT</p>
            <p>FILMS</p>
            <p>LISTS</p>
            <p>PEOPLE</p>
            <div className='search-bar'><input></input><FiSearch/></div>
        </div>
        </div>
    </div>
    )
}



export default NavBar

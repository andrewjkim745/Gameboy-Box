import React from 'react'
import './Styles/Footer.scss'



const Footer = () => {
    return (
        <div className='outerFooterContainer'>
        <div className='footerContainer'>
            <div className='footerRow'>
            <div className='siteLinks'>
                <p>About</p>
                <p>News</p>
                <p>Pro</p>
                <p>Apps</p>
                <p>Year in Review</p>
                <p>Gift Guide</p>
                <p>Podcast</p>
                <p>Help</p>
                <p>Terms</p>
                <p>API</p>
                <p>Contact</p>
            </div>
            <div className='socialMediaLinks'>
                <img src='https://i.imgur.com/cwF23UH.png'></img>
                <p>/</p>
                <img src='https://i.imgur.com/1D2dVcX.png'></img>
                <p>/</p>
                <img src='https://i.imgur.com/9YPrOrl.png'></img>
            </div>
            </div>
            <div className='bottomFooter'>
                <p>© Gameboxd Limited. Made by Andrew J Kim and Phillip Lowe. Data made from scratch</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
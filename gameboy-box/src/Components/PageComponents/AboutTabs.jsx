import React from 'react'
import '../Styles/AboutTabs.scss'



const AboutTabs = (props) => {
    return (
        <div className='tabsContainer'>
            <div className={props.frequentClass}>
                <h3 onClick={props.frequentClick}>Frequent questions</h3>
            </div>
            <div className={props.proClass}>
                <h3 onClick={props.membershipClick}>Pro Membership</h3>
            </div>
            <div className={props.gameClass}>
                <h3 onClick={props.gameClick}>Game data</h3>
            </div>
            <div className={props.importClass}>
                <h3 onClick={props.importClick}>Importing data</h3>
            </div>
            <div className={props.migratingClass}>
                <h3 onClick={props.migratingClick}>Migrating from IMDb</h3>
            </div>
            <div className={props.gameboxdClass}>
                <h3 onClick={props.gameboxdClick}>Gameboxd brand</h3>
            </div>
            <div className={props.behindClass}>
                <h3 onClick={props.behindClick}>Behind the scenes</h3>
            </div>
        </div>
    )
}


export default AboutTabs
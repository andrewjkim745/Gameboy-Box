import React from 'react'
import '../Styles/About.scss'
import AboutTabs from './AboutTabs'


export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frequentClicked: true,
            membershipClicked: false,
            gameDataClicked: false,
            importClicked: false,
            migratingClicked: false,
            gameboxdClicked: false,
            behindClicked: false,
        }
    }

    frequentClick = () => {
        if (this.state.frequentClicked === false) {
            this.setState({
                frequentClicked: true,
                membershipClicked: false,
                gameDataClicked: false,
                importClicked: false,
                migratingClicked: false,
                gameboxdClicked: false,
                behindClicked: false
            })
        }
    }

    membershipClick = () => {
        if (this.state.membershipClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: true,
                gameDataClicked: false,
                importClicked: false,
                migratingClicked: false,
                gameboxdClicked: false,
                behindClicked: false
            })
        }
    }

    gameClick = () => {
        if (this.state.gameDataClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: false,
                gameDataClicked: true,
                importClicked: false,
                migratingClicked: false,
                gameboxdClicked: false,
                behindClicked: false
            })
        }
    }

    importClick = () => {
        if (this.state.importClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: false,
                gameDataClicked: false,
                importClicked: true,
                migratingClicked: false,
                gameboxdClicked: false,
                behindClicked: false
            })
        }
    }

    migrateClick = () => {
        if (this.state.migratingClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: false,
                gameDataClicked: false,
                importClicked: false,
                migratingClicked: true,
                gameboxdClicked: false,
                behindClicked: false
            })
        }
    }

    gameboxdClick = () => {
        if (this.state.gameboxdClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: false,
                gameDataClicked: false,
                importClicked: false,
                migratingClicked: false,
                gameboxdClicked: true,
                behindClicked: false
            })
        }
    }

    behindClick = () => {
        if (this.state.behindClicked === false) {
            this.setState({
                frequentClicked: false,
                membershipClicked: false,
                gameDataClicked: false,
                importClicked: false,
                migratingClicked: false,
                gameboxdClicked: false,
                behindClicked: true
            })
        }
    }

    renderFrequentquestions = () => {
        return (
        <div className={this.state.frequentClicked ? 'flexContainer' : 'displayNone'}>
            <div className='frequentTitle'>
                <h3>ABOUT GAMEBOXD</h3>
            </div>
        </div>
        )
    }

    renderMembership = () => {
        return (
        <div className={this.state.membershipClicked ? 'flexContainer' : 'displayNone'}>
            <div className='proMembership'>
                <h3>Pro membership</h3>
            </div>
        </div>
        )
    }

    renderGameData = () => {
        return (
        <div className={this.state.gameDataClicked ? 'flexContainer' : 'displayNone'}>
            <div className='filmData'>
                <h3>Game data</h3>
            </div>
        </div>
        )
    }

    renderImportData = () => {
        return (
        <div className={this.state.importClicked ? 'flexContainer' : 'displayNone'}>
            <div className='importData'>
                <h3>Import data</h3>
            </div>
        </div>
        )
    }

    renderMigrating = () => {
        return (
        <div className={this.state.migratingClicked ? 'flexContainer' : 'displayNone'}>
            <div className='migratingTitle'>
                <h3>Migrating from IMDb</h3>
            </div>
        </div>
        )
    }

    renderGameboxd = () => {
        return (
        <div className={this.state.gameboxdClicked ? 'flexContainer' : 'displayNone'}>
            <div className='gameboxdTitle'>
                <h3>Gameboxd Brand</h3>
            </div>
        </div>
        )
    }

    renderBehind = () => {
        return (
        <div className={this.state.behindClicked ? 'flexContainer' : 'displayNone'}>
            <div className='behindTitle'>
                <h3>Behind the Scenes</h3>
            </div>
        </div>
        )
    }

    renderTabs = () => { 
        return (
            <AboutTabs
            frequentClass={this.state.frequentClicked ? 'selected' : 'notSelected'}
            proClass={this.state.membershipClicked ? 'selected' : 'notSelected'}
            gameClass={this.state.gameDataClicked ? 'selected' : 'notSelected'}
            importClass={this.state.importClicked ? 'selected' : 'notSelected'}
            migratingClass={this.state.migratingClicked ? 'selected' : 'notSelected'}
            gameboxdClass={this.state.gameboxdClicked ? 'selected' : 'notSelected'}
            behindClass={this.state.behindClicked ? 'selected' : 'notSelected'}
            frequentClick={this.frequentClick}
            membershipClick={this.membershipClick}
            gameClick={this.gameClick}
            importClick={this.importClick}
            migratingClick={this.migrateClick}
            gameboxdClick={this.gameboxdClick}
            behindClick={this.behindClick}
            />
        )
    }

    render() {
        return (
            <div className='outerFlexContainer'>
                {this.renderTabs()}
                {this.renderFrequentquestions()}
                {this.renderMembership()}
                {this.renderGameData()}
                {this.renderImportData()}
                {this.renderMigrating()}
                {this.renderGameboxd()}
                {this.renderBehind()}
            </div>
            )
        }
}
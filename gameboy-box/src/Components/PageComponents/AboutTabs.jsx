import React from 'react'




export default class AboutTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        return (
            <div onClick={this.onClick} className={this.state.clicked ? 'selected' : 'notSelected'}>
                <h3>{props.title}</h3>
            </div>
        )
    }
}
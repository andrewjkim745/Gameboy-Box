import React from 'react'
import './Styles/Landing.scss'
import Card from './PageComponents/Card'



class Landing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: false,
            stats: [
                {
                    image: 'https://cdn.bulbagarden.net/upload/thumb/6/62/Sapphire_EN_boxart.png/250px-Sapphire_EN_boxart.png',
                    votes: 10745,
                    rating: 1601
                },
                {
                    image: 'https://www.zeldadungeon.net/wiki/images/2/25/Minish-Cap-Cover.jpg',
                    votes: 19345,
                    rating: 5670
                }
            ]

        }
    }

    handleMouseHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    renderCards = () => {
        return (
            <div className='card-carousel'>
                {this.state.stats.map(stat => {
                    return (
                        <Card
                            key={stat.id}
                            image={stat.image}
                            onMouseEnter={() => this.handleMouseHover()}
                            onMouseLeave={() => this.handleMouseHover()}
                            renderVotesRatings={this.renderVotesRatings()}>
                        </Card>
                    )
                })}
            </div>
        )
    }


    renderVotesRatings = () => {
        if (this.state.hover)
            return (
                <>
                    {this.state.stats.map(stat => {
                        return (
                            <div className='stats-card' key={stat.id}>
                                <img src='https://i.imgur.com/rXfPua4.png'></img>
                                <h3>{stat.votes}</h3>
                                <img src='https://i.imgur.com/1aiORiI.png'></img>
                                <h3>{stat.rating}</h3>
                            </div>
                        )
                    })}
                </>
            )
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
                    {this.renderCards()}
                </div>
            </>
        )
    }
}


export default Landing 
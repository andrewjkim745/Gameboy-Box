import React from 'react'
import './Styles/Landing.scss'
import CardItem from './PageComponents/Card'
import Highlights from './PageComponents/Highlights'



class Landing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: false,
            highlights: false,
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
            ],
            highlights: [
                {   
                    image: 'https://i.imgur.com/Z1l5Hul.png',
                    text: "Keep Track of every game you've ever played (or just start from the day you join)" 
                },
                {
                    image: 'https://i.imgur.com/tSF1Ujf.png',
                    text: 'Show some love for your favorite games, lists and reviews with a "like"'
                },
                {
                    image: 'https://i.imgur.com/q9diuHj.png',
                    text: 'Write and share reviews, and follow friends and other members to read theirs'
                },
                {
                    image: 'https://i.imgur.com/hcx2CH5.png',
                    text: 'Rate each game on a five-star scale (with halves) to record and share your reaction'
                },
                {
                    image: 'https://i.imgur.com/mEtHYze.png',
                    text: 'Keep a diary of your game playing (and upgrade to Pro for comprehensive stats)'
                },
                {
                    image: 'https://i.imgur.com/m7ACBCN.png',
                    text: 'Compile and share lists of games of any genre and keep a watchlist of games to play'
                }
            ]
        }
    }

    handleMouseHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    handleMouseOut = () => {
        this.setState({
            hover: null
        })
    }

    renderCards = () => {
        return (
            <div className='card-carousel'>
                {this.state.stats.map(stat => {
                    return (
                        <CardItem
                            key={stat.id}
                            image={stat.image}
                            onMouseEnter={() => this.setState({ hover: true })}
                            onMouseLeave={() => this.setState({ hover: false})}
                            renderVotesRatings={this.renderVotesRatings()}
                            rating={stat.rating}
                            votes={stat.votes}
                        />
                    );
                })}
            </div>
        )
    }

    renderHighlights = () => {
        return (
            <div className='highlights-container'>
                {this.state.highlights.map(highlight => {
                    return (
                        <Highlights
                            key={highlight.id}
                            src={highlight.image}
                            text={highlight.text}
                        />
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
                    {this.renderHighlights()}
                </div>
            </>
        )
    }
}


export default Landing 
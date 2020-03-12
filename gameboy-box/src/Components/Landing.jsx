import React from 'react'
import './Styles/Landing.scss'
import CardItem from './PageComponents/Card'
import Highlights from './PageComponents/Highlights'
import ReviewedCard from './PageComponents/ReviewedCard'
import { IoIosMenu } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import './Styles/NavBar.scss'



class Landing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hover: false,
            windowSize: 0,
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
            ],
            Reviewed: [
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg'
                },
                {
                    image: 'https://vignette.wikia.nocookie.net/mario/images/2/23/Mario_%26_Luigi_Superstar_Saga_-_North_American_Cover.png/revision/latest?cb=20120622213536'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Advance_Wars_Coverart.jpg'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/FinalFantasyTacticsAdvanceGBACoverArtUS.jpg/220px-FinalFantasyTacticsAdvanceGBACoverArtUS.jpg'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Kirby_%26_the_Amazing_Mirror.jpg/220px-Kirby_%26_the_Amazing_Mirror.jpg'
                },
                {
                    image: 'https://miro.medium.com/max/2154/1*Yi-lfOw522jn9FJLnwqHiA.jpeg'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/KingdomHeartsCoMCover_.jpg'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sonic_Battle_Coverart.png'
                },
                {
                    image: 'https://images-na.ssl-images-amazon.com/images/I/61-84qWXw2L.jpg'
                }
            ]
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


    renderNav = () => {
            return (
            <div className='nav-container'>
                <div className='nav-bar'>
                <div className='title'>
                <img className='logo' src='https://i.imgur.com/PdBoInC.png'></img>
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

    renderHambuger = () => {
        return (
            <div>
                <h2>Gameboxd</h2>
                <IoIosMenu/>
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

    renderReviewed = () => {
        return (
            <div className='reviewed-cards-container'>
                {this.state.Reviewed.map(review => {
                    return (
                        <ReviewedCard
                        src={review.image}
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
            {this.state.windowSize < 425 ? this.renderHambuger() : this.renderNav()}
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
                    <div className='highlights-parent-container'>
                    <h3>GAMEBOYBOXD LETS YOU...</h3>
                    {this.renderHighlights()}
                    </div>
                    <div className='reviewed-parent-container'>
                        <div className='reviewed-top-container'>
                            <h3>JUST REVIEWED...</h3>
                            <p className='numberOfGames'>{this.state.Reviewed.length} games played</p>
                        </div>
                        {this.renderReviewed()}
                    </div>
                </div>
            </>
        )
    }
}


export default Landing 
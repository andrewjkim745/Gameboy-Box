import React from 'react'
import './Styles/Landing.scss'
import CardItem from './PageComponents/Card'
import Highlights from './PageComponents/Highlights'
import ReviewedCard from './PageComponents/ReviewedCard'
import { IoIosMenu } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import BottomLeftCard from './PageComponents/BottomLeftCard'
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
                    title: 'Pokemon Leaf Green',
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg',
                    description: 'Honestly a great remake and this game makes me think that pokemon yellow, red and blue didnt need the pokemon lets go series.',
                    rating: 4,
                    date: '2004',
                    user: 'adogdog',
                    comments: [
                        'LOL fire red is better LOL',
                        'WOW GREAT REVIEW ANDREW KEEP IT UP',
                        'Why not just play Fire Red?',
                    ],
                    likes: 793


                },
                {
                    title: 'Mario & Luigi SuperStar Saga',
                    image: 'https://vignette.wikia.nocookie.net/mario/images/2/23/Mario_%26_Luigi_Superstar_Saga_-_North_American_Cover.png/revision/latest?cb=20120622213536',
                    description: 'My first ever rpg. It has its flaws such as the fact that it is fairy linear, but the turn based system along with bros. combos system has depth. Another thing that makes this game unique is that during the enemies turns, you as a player have control over whether or not you get hit. Bosses attack patterns that become harder and harder to learn as the game progresses and somtimes they will even fake you out. Great Game',
                    rating: 5,
                    date: '2003',
                    user: 'adogdog',
                    comments: [
                        'Kinda reminds me of the paper mario series'
                    ],
                    likes: 456
                },
                {
                    title: 'Advance Wars',
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Advance_Wars_Coverart.jpg',
                    description: 'Never Played as a Kid, is it good?',
                    rating: 1,
                    date: '2001',
                    user: 'adogdog',
                    comments: [
                        'Its okay'
                    ],
                    likes: 151
                },
                {  
                    title: 'Final Fantasy Tactics Advance',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/FinalFantasyTacticsAdvanceGBACoverArtUS.jpg/220px-FinalFantasyTacticsAdvanceGBACoverArtUS.jpg',
                    description: 'I had a lot of trouble with this game as a kid and the story really captivated me. A group of kids being transported into a fantasy world where their lives are so much better and more interesting? Literally my dream as a kid. The game has a main quest which is about 15-20 hours long if you are a decent player, and tons of extra content that extends the total gametime to at least 40-50 hours.',
                    rating: 5,
                    date: '2003',
                    user: 'adogdog',
                    comments: [
                        'Nice Nostalgia glasses buddy',
                        'The snowball fight tho?',
                        'Ritz my waifu'
                    ]
                },
                {
                    title: 'Kirby & the Amazing Mirror',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Kirby_%26_the_Amazing_Mirror.jpg/220px-Kirby_%26_the_Amazing_Mirror.jpg',
                    description: 'I am not the biggest kirby fan, but I do enjoy it for what it is and this game embodies that.',
                    rating: 3,
                    date: '2004',
                    user: 'adogdog',
                    comments: [
                        'Trash Game',
                        'Game would have been better if there wasnt already an amazing kirby game for gba'
                    ]
                },
                {   
                    title: 'Fire Emblem',
                    image: 'https://miro.medium.com/max/2154/1*Yi-lfOw522jn9FJLnwqHiA.jpeg',
                    description: 'My first fire emblem was the roy game, but this game is definitely my favorite gba release. Its very basic fire emblem gameplay and thats all I wanted as a kid.',
                    rating: 4.5,
                    date: '2003',
                    user: 'adogdog',
                    comments: [
                        'Lyn tho',
                        'Hector tho?',
                        'ELIWOOD THO?',
                        '^^plebs'
                    ]
                },
                {
                    title: 'Kingdom Hearts Chain of Memories',
                    image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/KingdomHeartsCoMCover_.jpg',
                    description: 'I love KH but didnt love how grindy this game felt as a kid. The battle system was cool and unique, but by the end of the game I didnt see a reason to not just make a deck with only 9s and a few 0s. Also, This game was the catalyst for making the kh storyline 3x as confusing.',
                    rating: 3.5,
                    date: '2004',
                    user: 'adogdog',
                    comments: [
                        'Whens KH3?'
                    ]
                },
                {
                    title: 'Sonic Battle',
                    image: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sonic_Battle_Coverart.png',
                    description: 'Technically my first "fighting game". Could be nostalgia goggles but I liked how there was an actual combo system that felt fun to implement with different characters. Characters also had different attributes and abilities that made them feel unique. The story was decent and had a lot of junk and extra material, but overall I felt the story was interesting and the ending almost made me cry as a kid',
                    rating: 4,
                    date: '2003',
                    user: 'adogdog',
                    comments: [
                        'Game sucks and doesnt deserve anything above 2',
                        'I quit playing this game after 10 minutes'
                    ]
                },
                {
                    title: 'Sonic Advance 2',
                    image: 'https://images-na.ssl-images-amazon.com/images/I/61-84qWXw2L.jpg',
                    description: 'Never played, but I have seen multiple newgrounds sonic sprite animations that came from this game',
                    rating: 3,
                    date: '2003',
                    user: 'adogdog',
                    comments: [
                        'Lol you are giving a rating for a game you have never played'
                    ]
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

    renderBottomCards = () => {
        return (
            <div className='bottom-left-container'>
                <div>
                    <h3>POPULAR REVIEWS THIS WEEK</h3>
                    <p>More</p>
                </div>
                {this.state.Reviewed.map(review => {
                    return (
                        <BottomLeftCard
                            key={review.id}
                            title={review.title}
                            image={review.image}
                            description={review.description}
                            rating={review.rating}
                            likes={review.likes}
                            date={review.date}
                            commentCount={review.comments.length}
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
                    {this.renderBottomCards()}
                </div>
            </>
        )
    }
}


export default Landing 
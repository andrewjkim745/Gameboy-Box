import React from 'react'
import './Styles/Landing.scss'
import CardItem from './PageComponents/CardItem'
import Highlights from './PageComponents/Highlights'
import ReviewedCard from './PageComponents/ReviewedCard'
import BottomLeftCard from './PageComponents/BottomLeftCard'
import Lists from './PageComponents/Lists'
import ListsImage from './PageComponents/ListsImage'
import RecentNews from './PageComponents/RecentNews'
import RecentNewsCard from './PageComponents/RecentNewsCard'
import PopReviewersCard from './PageComponents/PopReviewersCard'
import Reviewers from './PageComponents/Reviewers'
import { NavLink } from 'react-router-dom'


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
                },
                {
                    image: 'https://images-na.ssl-images-amazon.com/images/I/51yZcsELkCL.jpg',
                    votes: 99998,
                    rating: 9999
                },
                {
                    image: 'https://i.etsystatic.com/10309132/r/il/3560a9/1250048004/il_570xN.1250048004_djvt.jpg',
                    votes: 11112,
                    rating: 15426
                },
                {
                    image: 'https://images.lukiegames.com/t_300e2/assets/images/GBA/BoxScans/GBA_Pokemon_Fire_Red_Box.jpg',
                    votes: 910,
                    rating: 2562
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
                    id: 1,
                    title: 'Pokemon Leaf Green',
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg',
                    description: 'Honestly a great remake and this game makes me think that pokemon yellow, red and blue didnt need the pokemon lets go series.',
                    rating: 4,
                    date: '2004',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'LOL fire red is better LOL',
                        'WOW GREAT REVIEW ANDREW KEEP IT UP',
                        'Why not just play Fire Red?',
                    ],
                    likes: 793


                },
                {
                    id: 2,
                    title: 'Mario & Luigi SuperStar Saga',
                    image: 'https://vignette.wikia.nocookie.net/mario/images/2/23/Mario_%26_Luigi_Superstar_Saga_-_North_American_Cover.png/revision/latest?cb=20120622213536',
                    description: 'My first ever rpg. It has its flaws such as the fact that it is fairy linear, but the turn based system along with bros. combos system has depth. Another thing that makes this game unique is that during the enemies turns, you as a player have control over whether or not you get hit. Bosses attack patterns that become harder and harder to learn as the game progresses and somtimes they will even fake you out. Great Game',
                    rating: 5,
                    date: '2003',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Kinda reminds me of the paper mario series'
                    ],
                    likes: 456
                },
                {
                    id: 3,
                    title: 'Advance Wars',
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Advance_Wars_Coverart.jpg',
                    description: 'Never Played as a Kid, is it good?',
                    rating: 1,
                    date: '2001',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Its okay'
                    ],
                    likes: 151
                },
                {
                    id: 4,
                    title: 'Final Fantasy Tactics Advance',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/FinalFantasyTacticsAdvanceGBACoverArtUS.jpg/220px-FinalFantasyTacticsAdvanceGBACoverArtUS.jpg',
                    description: 'I had a lot of trouble with this game as a kid and the story really captivated me. A group of kids being transported into a fantasy world where their lives are so much better and more interesting? Literally my dream as a kid. The game has a main quest which is about 15-20 hours long, if you are a decent player, and tons of extra content that extends the total gametime to at least 40-50 hours.',
                    rating: 5,
                    date: '2003',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Nice Nostalgia glasses buddy',
                        'The snowball fight tho?',
                        'Ritz my waifu'
                    ],
                    likes: 245
                },
                {
                    id: 5,
                    title: 'Kirby & the Amazing Mirror',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Kirby_%26_the_Amazing_Mirror.jpg/220px-Kirby_%26_the_Amazing_Mirror.jpg',
                    description: 'I am not the biggest kirby fan, but I do enjoy it for what it is and this game embodies that.',
                    rating: 3,
                    date: '2004',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Trash Game',
                        'Game would have been better if there wasnt already an amazing kirby game for gba'
                    ],
                    likes: 344
                },
                {
                    id: 6,
                    title: 'Fire Emblem',
                    image: 'https://miro.medium.com/max/2154/1*Yi-lfOw522jn9FJLnwqHiA.jpeg',
                    description: 'My first fire emblem was the roy game, but this game is definitely my favorite gba release. Its very basic fire emblem gameplay and thats all I wanted as a kid.',
                    rating: 4.5,
                    date: '2003',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Lyn tho',
                        'Hector tho?',
                        'ELIWOOD THO?',
                        '^^plebs'
                    ],
                    likes: 290
                },
                {
                    id: 7,
                    title: 'Kingdom Hearts Chain of Memories',
                    image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/KingdomHeartsCoMCover_.jpg',
                    description: 'I love KH but didnt love how grindy this game felt as a kid. The battle system was cool and unique, but by the end of the game I didnt see a reason to not make a deck with only 9s and a few 0s. Also, This game was the catalyst for making the kh storyline 3x as confusing.',
                    rating: 3.5,
                    date: '2004',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Whens KH3?'
                    ],
                    likes: 200
                },
                {
                    id: 8,
                    title: 'Sonic Battle',
                    image: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sonic_Battle_Coverart.png',
                    description: 'Technically my first "fighting game". Could be nostalgia goggles but I liked how there was an actual combo system that felt fun to implement with different characters. Characters also had different attributes and abilities that made them feel unique. The story was decent and had a lot of junk and extra material, but overall I felt it was interesting enough.',
                    rating: 4,
                    date: '2003',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Game sucks and doesnt deserve anything above 2',
                        'I quit playing this game after 10 minutes'
                    ],
                    likes: 240
                },
                {
                    id: 9,
                    title: 'Sonic Advance 2',
                    image: 'https://images-na.ssl-images-amazon.com/images/I/61-84qWXw2L.jpg',
                    description: 'Never played, but I have seen multiple newgrounds sonic sprite animations that came from this game',
                    rating: 3,
                    date: '2003',
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    comments: [
                        'Lol you are giving a rating for a game you have never played'
                    ],
                    likes: 300
                }
            ],

            lists: [
                {
                    user: 'adogdog',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    firstImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/FinalFantasyTacticsAdvanceGBACoverArtUS.jpg/220px-FinalFantasyTacticsAdvanceGBACoverArtUS.jpg',
                    secondImage: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sonic_Battle_Coverart.png',
                    thirdImage: 'https://vignette.wikia.nocookie.net/mario/images/2/23/Mario_%26_Luigi_Superstar_Saga_-_North_American_Cover.png/revision/latest?cb=20120622213536',
                    fourthImage: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg',
                    fifthImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Metroid_Fusion_box.jpg/220px-Metroid_Fusion_box.jpg',
                    likes: '2,770',
                    description: 'Games in which I treasure as part of my early childhood and will always be some of my favorite games of all time. Every game on the list is objectively better than phils favorite games',
                    comments: [
                        'lol trash list'
                    ]

                },
                {
                    user: 'philowe2001',
                    userImage: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    firstImage: 'https://upload.wikimedia.org/wikipedia/en/1/1d/KingdomHeartsCoMCover_.jpg',
                    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/61-84qWXw2L.jpg',
                    thirdImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Sonic_Advance_Coverart.png/220px-Sonic_Advance_Coverart.png',
                    fourthImage: 'https://images-na.ssl-images-amazon.com/images/I/61Lgrv%2BnFmL.jpg',
                    fifthImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Dragon_Ball_Z_Supersonic_Warriors.jpg/220px-Dragon_Ball_Z_Supersonic_Warriors.jpg',
                    likes: '0',
                    description: 'Games that I think phil has played or enjoyed in the past',
                    comments: [
                        'plz come back phil',
                        'I need the backend',
                        ':('
                    ]

                }
            ],
            recentNews: [
                {
                    image: 'https://vignette.wikia.nocookie.net/pokemon-fan-game/images/e/e6/Pokemon_Advanced_Adventure.jpg/revision/latest/scale-to-width-down/340?cb=20170930224625',
                    romName: 'Pokemon Advanced Adventure',
                    description: 'A LeafGreen based ROM hack which features a new region to explore, a new hero, new pokemon sprites, no HMs and a new Storyline'
                },
                {
                    image: 'https://images.lukiegames.com/t_300e2/assets/images/GBA/BoxScans/GBA_Sonic_Advance_3_Box.jpg',
                    romName: 'Dr Robotnik in Sonic',
                    description: 'Finally you can play as Doctor Eggman in the classic first Sonic game.',
                },
                {
                    image: 'https://cache.downloadroms.io/static/8c1873d0700a4150e0a2629fdd4a9eeee3f741ed/image.jpg',
                    romName: 'Pokemon Kaizo Emerald',
                    description: 'A significantly more challenging version of Pokemon Emerald. Postgame is heavily changed, with the addition of new Kaizo Challenges and an overall more fulfilling experience.'
                }
            ],
            Reviewers: [
                {
                    username: 'adogdog',
                    image: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    games: '9',
                    reviews: '9'
                },
                {
                    username: 'philowe2001',
                    image: 'https://mvp.microsoft.com/en-us/PublicProfile/Photo/5003148',
                    games: '0',
                    reviews: '0',
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
                            onMouseLeave={() => this.setState({ hover: false })}
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

    renderBottomCards = () => {
        return (
            <div className='bottom-left-container'>
                <div className='bottom-left-title'>
                    <h3>POPULAR REVIEWS THIS WEEK</h3>
                    <p>More</p>
                </div>
                {this.state.Reviewed.map(review => {
                    return (
                        <>
                        <NavLink exact to={{ 
                            pathname: `/games/${review.id}`,
                            game: {
                                title: review.title,
                                image: review.image,
                                favorites: review.likes
                            }
                        }}
                            className='navLink'>
                        <BottomLeftCard
                            title={review.title}
                            image={review.image}
                            description={review.description}
                            rating={review.rating}
                            likes={review.likes}
                            date={review.date}
                            commentCount={review.comments.length}
                            user={review.user}
                            src2={review.userImage}
                        />
                        </NavLink>
                        </>
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

    renderLists = () => {
        return (
            <Lists >
                {this.state.lists.map(list => {
                    return (
                        <ListsImage
                            key={list.id}
                            firstImage={list.firstImage}
                            secondImage={list.secondImage}
                            thirdImage={list.thirdImage}
                            fourthImage={list.fourthImage}
                            fifthImage={list.fifthImage}
                            description={list.description}
                            user={list.user}
                            userImage={list.userImage}
                        />
                    )
                })}
            </Lists>
        )
    }

    renderRecentNews = () => {
        return (
            <RecentNews>
                {this.state.recentNews.map(news => {
                    return (
                        <RecentNewsCard
                            key={news.id}
                            image={news.image}
                            romName={news.romName}
                            description={news.description}
                        />
                    )
                })}
            </RecentNews>
        )
    }

    renderPopReviewers = () => {
        return (
            <Reviewers>
                {this.state.Reviewers.map(reviewer => {
                    return (
                        <PopReviewersCard
                            key={reviewer.id}
                            image={reviewer.image}
                            username={reviewer.username}
                            reviews={reviewer.reviews}
                            games={reviewer.games}
                        />
                    )
                })}
            </Reviewers>
        )
    }

    render() {
        return (
            <>
                <div className='landing-quote'>
                    <h2>Track Games you've played</h2>
                    <br></br>
                    <h2>Save games you want to play</h2>
                    <br></br>
                    <h2>Tell your friends what's good.</h2>
                    <a className='getStarted'>GET STARTED - IT'S FREE</a>
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
                    <div className='outer-flex-container'>
                        {this.renderBottomCards()}
                        <div className='flex-container'>
                            {this.renderLists()}
                            {this.renderPopReviewers()}
                        </div>
                    </div>
                    {this.renderRecentNews()}
                </div>
            </>
        )
    }
}


export default Landing 
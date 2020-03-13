import React from 'react'
import Card from './Card'


class CardItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }
  
    renderVotesRatings = () => {
      if (this.state.hover) {
        return (
          <div className="stats-card">
            <img src="https://i.imgur.com/rXfPua4.png" />
            <h3>{this.props.votes}</h3>
            <img src="https://i.imgur.com/1aiORiI.png" />
            <h3>{this.props.rating}</h3>
          </div>
        );
      }
    };
  
    render() {
      return (
        <Card
          image={this.props.image}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
          renderVotesRatings={this.renderVotesRatings()}
        />
      );
    }
  }


  export default CardItem
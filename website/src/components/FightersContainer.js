import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FighterCard from "./FighterCard";

class FightersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: [],
    };
  }

  componentDidMount = () => {
    this.getFighters();
  };

  getFighters = () => {
    this.setState({
      fighters: [
        {
          id: 2,
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
          name: "ryu",
          description: "street fighter",
          health: 1000,
          attack: 300,
          speed: 20,
          type: 1,
          weakness: 2,
          datetime_created: "today",
        },
        {
          id: 1,
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
          name: "ken",
          description: "street fighter",
          health: 1000,
          attack: 300,
          speed: 20,
          type: 0,
          weakness: 3,
          datetime_created: "today",
        },
      ],
    });
  };

  renderFighters = () => {
    return this.state.fighters.map((fighter, i) => (
      <FighterCard
        key={i}
        fighter={fighter}
        editFighter={this.editFighter}
        removeFighter={this.removeFighter}
      />
    ));
  };

  addFighter = (fighter) => {
    this.setState({ fighters: [fighter, ...this.state.fighters] });
  };

  editFighter = (fighter) => {
    this.setState({
      fighters: this.state.fighters.map((currentFighter) =>
        currentFighter.id === fighter.id ? fighter : currentFighter
      ),
    });
  };

  removeFighter = (id) => {
    this.setState({
      fighters: this.state.fighters.filter((fighter) => fighter.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: 75 }}>
          Choose your fighter!
        </h1>
        <div className="my-3 text-center">
          <Button>Create fighter +</Button>
        </div>
        {this.renderFighters()}
      </div>
    );
  }
}

export default FightersContainer;

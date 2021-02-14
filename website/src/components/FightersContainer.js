import React, { Component } from "react";
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
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
          name: "ryu",
          description: "street fighter",
          health: 1000,
          attack: 300,
          speed: 20,
          type: 1,
          weakness: 5,
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
          name: "ken",
          description: "street fighter",
          health: 1000,
          attack: 300,
          speed: 20,
          type: 1,
          weakness: 5,
        },
      ],
    });
  };

  renderFighters = () => {
    return this.state.fighters.map((fighter) => (
      <FighterCard fighter={fighter} />
    ));
  };

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: 75 }}>
          Choose your fighter!
        </h1>
        {this.renderFighters()}
      </div>
    );
  }
}

export default FightersContainer;

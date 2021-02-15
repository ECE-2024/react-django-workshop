import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import CreateFighterModal from "./CreateFighterModal";
import FighterCard from "./FighterCard";

const BASE_URL = "http://localhost:8000/";

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

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  getFighters = () => {
    axios
      .get(BASE_URL + "api/fighters")
      .then((response) => {
        this.setState({ fighters: response.data });
      })
      .catch((error) => {
        console.dir(error?.response);
      });
  };

  addFighter = (fighter) => {
    axios
      .post(BASE_URL + "api/fighters", fighter)
      .then((response) => {
        this.setState({ fighters: [response.data, ...this.state.fighters] });
      })
      .catch((error) => {
        console.dir(error?.response);
      });
  };

  editFighter = (fighter) => {
    axios
      .put(`${BASE_URL}api/fighters/${fighter.get("id")}`, fighter)
      .then((response) => {
        this.setState({
          fighters: this.state.fighters.map((currentFighter) =>
            currentFighter.id === response.data.id
              ? response.data
              : currentFighter
          ),
        });
      })
      .catch((error) => {
        console.dir(error?.response);
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
          <Button onClick={() => this.setState({ isModalOpen: true })}>
            Create fighter +
          </Button>
        </div>
        <CreateFighterModal
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          createFighter={this.addFighter}
        />
        {this.renderFighters()}
      </div>
    );
  }
}

export default FightersContainer;

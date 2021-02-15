import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { fighterTypes } from "../utils/fighterTypes";
import CreateFighterModal from "./CreateFighterModal";

function FighterCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className="my-3 py-3 mx-auto col-3">
      <Card.Title className="text-center">
        <h3>{props.fighter.name}</h3>
      </Card.Title>
      <Card.Img variant="top" src={props.fighter.image} />
      <Card.Body>
        <Card.Text className="text-center">
          {props.fighter.description}
        </Card.Text>
        <ListGroup>
          <ListGroup.Item>Health: {props.fighter.health}</ListGroup.Item>
          <ListGroup.Item>Attack: {props.fighter.attack}</ListGroup.Item>
          <ListGroup.Item>Speed: {props.fighter.speed}</ListGroup.Item>
          <ListGroup.Item>
            Type: {fighterTypes[props.fighter.type]}
          </ListGroup.Item>
          <ListGroup.Item>
            Weakness: {fighterTypes[props.fighter.weakness]}
          </ListGroup.Item>
        </ListGroup>
        <div className="mt-3">Created: {props.fighter.datetime_created}</div>
      </Card.Body>
      <div>
        <Button
          className="col-6 bg-success"
          onClick={() => setIsModalOpen(true)}
        >
          Level Up!
        </Button>
        <Button
          className="col-6 bg-danger"
          onClick={() => {
            props.removeFighter(props.fighter.id);
          }}
        >
          Delete
        </Button>
      </div>
      <CreateFighterModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        createFighter={props.editFighter}
        fighter={props.fighter}
      />
    </Card>
  );
}

export default FighterCard;

import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { fighterTypes } from "../utils/fighterTypes";

const handleSubmit = (e, closeModal, createFighter) => {
  e.preventDefault();
  const getVal = (id) => document.getElementById(id).value;

  const fighter = {
    name: getVal("name"),
    health: getVal("health"),
    attack: getVal("attack"),
    speed: getVal("speed"),
    type: getVal("type"),
    weakness: getVal("weakness"),
    description: getVal("description"),
    image: getVal("image")
  };

  createFighter({
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
    name: "chun li",
    description: "street fighter",
    health: 1000,
    attack: 300,
    speed: 20,
    type: 0,
    weakness: 1,
    datetime_created: "today",
  });
  closeModal();
};

const CreateFighterModal = ({ isOpen, closeModal, createFighter }) => {
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <h3 className="my-3 text-center">Create your figher!</h3>
      <Form
        className="m-auto"
        onSubmit={(e) => handleSubmit(e, closeModal, createFighter)}
      >
        <Form.Row>
          <Form.Group className="col-6" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="col-6" controlId="health">
            <Form.Label>Health</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-6" controlId="attack">
            <Form.Label>Attack</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="col-6" controlId="speed">
            <Form.Label>Speed</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-6" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              {fighterTypes.map((fType, i) => (
                <option value={i}>{fType}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="col-6" controlId="weakness">
            <Form.Label>Weakness</Form.Label>
            <Form.Control as="select">
              {fighterTypes.map((fType, i) => (
                <option value={i}>{fType}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-12" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-12" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form.Row>

        <div className="text-center">
          <Button className="col-3 mb-3" type="submit">
            Create
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateFighterModal;

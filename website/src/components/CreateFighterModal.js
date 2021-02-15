import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { fighterTypes } from "../utils/fighterTypes";

const handleSubmit = (e, closeModal, createFighter, fighter) => {
  e.preventDefault();
  const getVal = (id) => document.getElementById(id).value;

  createFighter({
    ...fighter,
    name: getVal("name"),
    health: getVal("health"),
    attack: getVal("attack"),
    speed: getVal("speed"),
    fighter_type: getVal("fighter_type"),
    weakness: getVal("weakness"),
    description: getVal("description"),
    image: getVal("image"),
  });
  closeModal();
};

const CreateFighterModal = ({ isOpen, closeModal, createFighter, fighter }) => {
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <h3 className="my-3 text-center">
        {fighter ? "Edit fighter" : "Create your fighter"}
      </h3>
      <Form
        className="m-auto"
        onSubmit={(e) => handleSubmit(e, closeModal, createFighter, fighter)}
      >
        <Form.Row>
          <Form.Group className="col-6" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={fighter?.name} />
          </Form.Group>

          <Form.Group className="col-6" controlId="health">
            <Form.Label>Health</Form.Label>
            <Form.Control type="number" defaultValue={fighter?.health} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-6" controlId="attack">
            <Form.Label>Attack</Form.Label>
            <Form.Control type="number" defaultValue={fighter?.attack} />
          </Form.Group>

          <Form.Group className="col-6" controlId="speed">
            <Form.Label>Speed</Form.Label>
            <Form.Control type="number" defaultValue={fighter?.speed} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-6" controlId="fighter_type">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue={fighter?.fighter_type}>
              {fighterTypes.map((fType, i) => (
                <option value={i}>{fType}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="col-6" controlId="weakness">
            <Form.Label>Weakness</Form.Label>
            <Form.Control as="select" defaultValue={fighter?.weakness}>
              {fighterTypes.map((fType, i) => (
                <option value={i}>{fType}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group className="col-12" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" defaultValue={fighter?.description} />
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
            {fighter ? "Edit" : "Create"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateFighterModal;

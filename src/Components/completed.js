import React from "react";
import {Form} from "react-bootstrap";

function Completed(props) {
  return (
    <Form.Group>
      <Form.Check inline type="checkbox" id="completed" onChange={props.change} value={props.completed} checked={props.completed}/>
      <Form.Label inline htmlFor="completed">Completed</Form.Label>
    </Form.Group>
  );
}

export default Completed;
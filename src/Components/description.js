import React from "react";
import { Form } from "react-bootstrap";

function Description(props) {
  return (<Form.Group className="form-group">
    <Form.Label htmlFor="change-description">Description: </Form.Label>
    <Form.Control type="text" className="form-control" value={props.description} onChange={props.change} id="change-description" />
  </Form.Group>);
}

export default Description;
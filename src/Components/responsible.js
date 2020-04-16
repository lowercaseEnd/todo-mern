import React from "react";
import { Form } from "react-bootstrap";

function Responsible(props) {
  return (
  <Form.Group className="form-group">
    <Form.Label htmlFor="change-resposible">Responsible: </Form.Label>
    <Form.Control type="text" className="form-control" value={props.responsible} onChange={props.change} id="change-resposible" />
  </Form.Group>
  );
}

export default Responsible;
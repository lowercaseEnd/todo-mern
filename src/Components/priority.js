import React from "react";
import {Form} from "react-bootstrap";

function Priority(props) {
  return (
    <Form.Group className="form-group">
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low" checked={props.priority === "Low"} onChange={props.change} />
              <Form.Label htmlFor="priorityLow" className="form-check-Form.Label">Low</Form.Label>
            </div>
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium" checked={props.priority === "Medium"} onChange={props.change} />
              <Form.Label htmlFor="priorityMedium" className="form-check-Form.Label">Medium</Form.Label>
            </div>
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High" checked={props.priority === "High"} onChange={props.change} />
              <Form.Label htmlFor="priorityHigh" className="form-check-Form.Label">High</Form.Label>
            </div>
          </Form.Group>
  );
}

export default Priority;
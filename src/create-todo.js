import React from "react";
import {Form, Button} from "react-bootstrap";

import Description from "./Components/description";
import Responsible from "./Components/responsible";
import Priority from "./Components/priority";

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false
    };
    this.changeDescription = this.changeDescription.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.changeResponsible = this.changeResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  changeResponsible(event) {
    this.setState({
      responsible: event.target.value
    });
  }
  changePriority(event) {
    this.setState({
      priority: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(`Form submitted:\nTodo description: ${this.state.description}`);
    console.log(`Todo responsible: ${this.state.responsible}\nTodo priority: ${this.state.priority}`);
    this.setState({
        description: "",
        responsible: "",
        priority: "",
        completed: false
    });
  }
  render() {
    return (
      <section>
        <h3>Welcome to Create Todo Component!</h3>
        <Form onSubmit={this.onSubmit}>
          <Description description={this.state.description} change={this.changeDescription} />
          <Responsible responsible={this.state.responsible} change={this.changeResponsible} />
          <Priority priority={this.state.priority} change={this.changePriority} />
          {/* <Form.Group className="form-group">
            <Form.Label htmlFor="change-description">Description: </Form.Label>
            <Form.Control type="text" className="form-control" value={this.state.description} onChange={this.changeDescription} id="change-description" />
          </Form.Group> */}
          {/* <Form.Group className="form-group">
            <Form.Label htmlFor="change-resposible">Responsible: </Form.Label>
            <Form.Control type="text" className="form-control" value={this.state.responsible} onChange={this.changeResponsible} id="change-resposible" />
          </Form.Group> */}
          {/* <Form.Group className="form-group">
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low" checked={this.state.priority === "Low"} onChange={this.changePriority} />
              <Form.Label htmlFor="priorityLow" className="form-check-Form.Label">Low</Form.Label>
            </div>
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium" checked={this.state.priority === "Medium"} onChange={this.changePriority} />
              <Form.Label htmlFor="priorityMedium" className="form-check-Form.Label">Medium</Form.Label>
            </div>
            <div className="form-check form-check-inline">
              <Form.Check className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High" checked={this.state.priority === "High"} onChange={this.changePriority} />
              <Form.Label htmlFor="priorityHigh" className="form-check-Form.Label">High</Form.Label>
            </div>
          </Form.Group> */}
          <Form.Group>
            <Button  type="submit">Create Todo</Button>
          </Form.Group>
        </Form>
      </section>
    )
  }
}

export default CreateTodo;
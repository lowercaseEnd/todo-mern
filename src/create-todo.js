import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import Description from "./Components/description";
import Responsible from "./Components/responsible";
import Priority from "./Components/priority";
import Submit from "./Components/submit";

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
    const newTodo = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed
    };
    axios.post("http://localhost:4000/todos/add", newTodo).then(res => console.log(res.data));
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
          <Submit />
        </Form>
      </section>
    )
  }
}

export default CreateTodo;
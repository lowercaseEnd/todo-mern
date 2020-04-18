import React from "react";
import axios from "axios";
import { Form, Container } from "react-bootstrap";

import Description from "./Components/description";
import Responsible from "./Components/responsible";
import Priority from "./Components/priority";
import Completed from "./Components/completed";
import Submit from "./Components/submit";

class EditTodo extends React.Component {
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
    this.changeCompleted = this.changeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/todos/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          description: response.data.description,
          responsible: response.data.responsible,
          priority: response.data.priority,
          completed: response.data.completed
        });
      }).catch(err => console.log(err));
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
  changeCompleted() {
    this.setState({
      completed: !this.state.completed
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const newTodo = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed
    };
    axios.post(`http://localhost:4000/todos/update/${this.props.match.params.id}`, newTodo).then(res => console.log(res.data));
    this.props.history.push("/");
  }
  render() {
    return (
      <Container>
        <h3>Update Todo</h3>
        <Form onSubmit={this.onSubmit}>
          <Description description={this.state.description} change={this.changeDescription} />
          <Responsible responsible={this.state.responsible} change={this.changeResponsible} />
          <Priority priority={this.state.priority} change={this.changePriority} />
          <Completed change={this.changeCompleted} completed={this.state.completed}/>
          <Submit />
        </Form>
      </Container>
    )
  }
}

export default EditTodo;
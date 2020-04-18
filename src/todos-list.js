import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Table } from "react-bootstrap";


const Todo = props => {
  return (<tr>
    <td className={props.todo.completed ? "completed" : ""}>{props.todo.description}</td>
    <td className={props.todo.completed ? "completed" : ""}>{props.todo.responsible}</td>
    <td className={props.todo.completed ? "completed" : ""}>{props.todo.priority}</td>
    <td>
      <Link to={`/edit/${props.todo._id}`}>Edit</Link>
    </td>
  </tr>);
}

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      }).catch(err => {
        console.log(err);
      });
  }
  todoList() {
    return this.state.todos.map(current => <Todo todo={current} key={current._id} /> );
  }
  render() {
    return (
      <Container>
        <h3>TodosList</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TodosList;
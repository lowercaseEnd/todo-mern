import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

import CreateTodo from "./create-todo";
import EditTodo from "./edit-todo";
import TodosList from "./todos-list";
{/* <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link> */ }
class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
              <img className="align-top d-inline-block" src={logo} width="30" height="30" alt="React logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarContent" />

            <Navbar.Collapse id="navbarContent">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">Todos</Link>
                <Link to="/create" className="nav-link">Create Todo</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </Container>
      </Router>

    );
  }

}

export default App;

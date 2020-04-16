import React from "react";

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
        <form onSubmit={this.onSubmit}>
          <fieldset className="form-group">
            <label htmlFor="change-description">Description: </label>
            <input type="text" className="form-control" value={this.state.description} onChange={this.changeDescription} id="change-description" />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="change-resposible">Responsible: </label>
            <input type="text" className="form-control" value={this.state.responsible} onChange={this.changeResponsible} id="change-resposible" />
          </fieldset>
          <fieldset className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low" checked={this.state.priority === "Low"} onChange={this.changePriority} />
              <label htmlFor="priorityLow" className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium" checked={this.state.priority === "Medium"} onChange={this.changePriority} />
              <label htmlFor="priorityMedium" className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High" checked={this.state.priority === "High"} onChange={this.changePriority} />
              <label htmlFor="priorityHigh" className="form-check-label">High</label>
            </div>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default CreateTodo;
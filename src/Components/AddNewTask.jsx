import React, { Component } from "react";

export default class AddNewTask extends Component {
  state = {
    newAction: "",
  };
  handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      id: Math.random(),
      action: this.state.newAction,
      isDone: false,
    };
    this.state.newAction.trim().length?
    this.props.addFunction(item):alert("ikteb 7wija sa7abi")
    this.setState({newAction:""})
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            className="todo-input"
            placeholder="what to do ....."
            value={this.state.newAction}
            onChange={(e) => this.setState({ newAction: e.target.value })}
          />
          <input type="submit" value="Add" className="todo-btn" />
        </form>
      </div>
    );
  }
}

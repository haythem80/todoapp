import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import "./App.css"
import AddNewTask from "./Components/AddNewTask";

export default class App extends Component {
  state = {
    todos: [
     
    ],
  };
  handleDelete=(THEID)=>this.setState({todos:this.state.todos.filter(el=>el.id!==THEID)})
  handleComplete=(ID)=>this.setState({todos:this.state.todos.map(el=>el.id===ID?{...el,isDone:!el.isDone}:el)})
  handleAdd=(newTask)=>this.setState({todos:[...this.state.todos,newTask]})
  render() {
    return (
      <div className="App">
      <AddNewTask  addFunction={this.handleAdd} />
        <TaskList list={this.state.todos}  deleteFucntion={this.handleDelete  }  handleComplete={this.handleComplete}/>
      </div>
    );
  }
}

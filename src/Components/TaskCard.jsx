import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={this.props.task.isDone?"todoCardComplete":"todoCard"}>
      <h1 className='text'>{this.props.task.action}</h1>
      <MdDelete className='trash' onClick={()=>this.props.deleteOne(this.props.task.id)} />
      <FaCheck className={this.props.task.isDone?"complete":"notComplete"} onClick={()=>this.props.CompleteAction(this.props.task.id)} />

    
      </div>
    )
  }
}

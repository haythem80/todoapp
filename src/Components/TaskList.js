import React, { Component } from 'react'
import TaskCard from './TaskCard'

export default class TaskList extends Component {
    
    render() {
    return (
      <div className='title'>
      {
        React.Children.toArray(this.props.list.map(el=><TaskCard task={el} deleteOne={this.props.deleteFucntion} CompleteAction={this.props.handleComplete} />))
      }
      </div>
    )
  }
}

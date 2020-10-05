import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <li key={this.props.id}>
                    <span className={this.props.done ? 'done' : 'undone'} onClick={()=>{this.props.onDone(this.props.id)}}>&#9675;</span>
                    {this.props.text}
                    <span className="remove" onClick={()=>{this.props.onRemove(this.props.id)}}>X</span>
                  </li>
                
            </div>
        )
    }
}

import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => (
            <TodoItem
              text={item.text}
              id={item.id}
              done={item.done}
              onDone={this.props.onDone}
              onRemove={this.props.onRemove}
            />
          ))}
        </ul>
      </div>
    );
  }
}

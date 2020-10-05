import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="Add a new todo"
            onChange={this.props.onChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

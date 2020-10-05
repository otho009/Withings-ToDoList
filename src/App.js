import React, { Component } from "react";

import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countTodos: 4,
      formValue: "",
      todos: [
        { id: 1, done: false, text: "Add new todo with form" },
        {
          id: 2,
          done: false,
          text: "Create Components : TodoForm, TodoList, TodoItem ...",
        },
        { id: 3, done: false, text: "Mark done an item" },
        { id: 4, done: false, text: "Remove an item" },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFormvalue = this.handleChangeFormvalue.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.ta);
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          id: this.state.countTodos + 1,
          done: false,
          text: this.state.formValue,
        },
      ],
      countTodos: prevState.countTodos + 1,
    }));
  }
  handleChangeFormvalue(event) {
    this.setState({
      formValue: event.target.value,
    });
  }
  handleDone = (id) => {
    const indexItem = this.state.todos.findIndex((e) => e.id === id);
    let newTodos = [...this.state.todos];
    newTodos[indexItem] = {
      ...newTodos[indexItem],
      done: !newTodos[indexItem].done,
    };
    this.setState({
      todos: newTodos,
    });
  };
  handleRemove = (id) => {
    const indexItem = this.state.todos.findIndex((e) => e.id === id);
    let newTodos = [...this.state.todos];
    newTodos.splice(indexItem, 1);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <TodoForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChangeFormvalue}
          />
          <TodoList
            todos={todos}
            onDone={this.handleDone}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;

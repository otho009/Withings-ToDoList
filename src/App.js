import React, { Component } from "react";

import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countTodos: 0,
      formValue: "",
      isLoaded: false,
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFormvalue = this.handleChangeFormvalue.bind(this);
  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/otho009/TodoList-MyJson/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            todos: result,
            isLoaded: true,
            countTodos:result.length
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true

          });
        }
      );
  }
  handleSubmit(event) {
    event.preventDefault();
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
    this.setState(prevState => ({
      todos: newTodos,
      countTodos: prevState.countTodos-1,
    }));
  };

  render() {
    const { todos, error, isLoaded } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
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
}

export default App;

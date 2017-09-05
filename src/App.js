import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId } from './lib/todoHelpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 0, name: 'First item', isCompleted: true},
        {id: 1, name: 'Second item', isCompleted: false},
        {id: 2, name: 'And this our last item', isCompleted: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isCompleted: false}
    const updateTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updateTodos,
      currentTodo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} 
          handleSubmit={this.handleSubmit}
          currentTodo={this.state.currentTodo}/>
        </div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

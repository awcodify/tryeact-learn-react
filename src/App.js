import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers'

class App extends Component {
  state = {
    todos: [
      { id: 0, name: 'First item', isCompleted: true },
      { id: 1, name: 'Second item', isCompleted: false },
      { id: 2, name: 'And this our last item', isCompleted: false }
    ],
    currentTodo: ''
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggleId = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggleId)
    this.setState({todos: updatedTodos})
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isCompleted: false}
    const updateTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updateTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange} 
          handleSubmit={submitHandler}
          currentTodo={this.state.currentTodo}/>
        </div>
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

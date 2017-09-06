import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css';
import { TodoForm, TodoList, Footer } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'
import { loadTodos, createTodo } from './services/todo.service'

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
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
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo added!'))
  }

  showTempMessage = (message) => {
    this.setState({message})
    setTimeout(() => this.setState({message: ''}), 1000)
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleRemove = (id, event) => {
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          {this.state.message && <span className='success'>{this.state.message}</span>}
          <TodoForm handleInputChange={this.handleInputChange} 
          handleSubmit={submitHandler}
          currentTodo={this.state.currentTodo}/>
          <TodoList handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

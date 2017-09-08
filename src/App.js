import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { Wrapper, Header } from './components/common'
import { Todo, Home } from './page'

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/todo" component={Todo} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;

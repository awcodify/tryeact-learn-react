import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/css/main.css';

import { Wrapper, Header } from './components/common'
import { Home, Work, Contact } from './page'

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/articles" component={Work} />
          <Route path="/contact" component={Contact} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './../../App.css';
import logo from './../../logo.svg'

const Navigation = () => (
    <nav className="navigation">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
    </nav>
)

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Todos</h2>
                </div>
                <Navigation />
             </div>
        )
    }    
}
import React, { Component } from 'react'
import './../../App.css';
import logo from './../../logo.svg'

export const Wrapper = (props) => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Todos</h2>
        </div>
        {props.children}
    </div>
)
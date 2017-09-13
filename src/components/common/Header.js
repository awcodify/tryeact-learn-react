import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => (
    <nav id="nav">
        <NavLink className="icon fa-home" exact to="/"><span>Hello World!</span></NavLink>
        <NavLink className="icon fa-folder" to="/articles"><span>Read me!</span></NavLink>
        <NavLink className="icon fa-envelope" to="/contact"><span>Contact Me!</span></NavLink>
    </nav>
)

export class Header extends Component {
    render = () => <Navigation />    
}
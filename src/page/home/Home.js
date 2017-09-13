import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends Component {
    render = () => 
        <div id="main" style={{ height: "400px"}}>
            <article id="me" className="panel" style={{display: "block"}}>
                <header>
                    <h1>Temporarily Closed</h1>
                    <p>Preparing the world class <s>internet</s><br/> marketing system. We'll comeback very soon.</p>
                </header>
                <NavLink to="/articles" className="jumplink pic">
                    <span className="arrow icon fa-chevron-right"><span>See my work</span></span>
                </NavLink>
            </article>
        </div>
        
}
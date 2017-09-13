import React, { Component } from 'react'

export class Contact extends Component {
    render = () => <div id= "main" style= {{ height: "500px" }}>
        <article id="contact" className="panel" style={{ display: "block" }}>
            <header>
                <h2>Contact</h2>
            </header>
            <p>
                Hello, my name is Danu. Currently work as software engineer. I love to spend my time for working, researching about new technology, and of course having fun with anyone with a glass of coffee
                </p>
            <ul>
                <li>
                    <span className="icon fa-phone-square link al">087725242425</span>
                </li>
                <li>
                    <a className="icon fa-github-square link al" target="_blank" rel="noopener noreferrer" href="https://github.com/whatdacode" to="/"><span>whatdacode</span></a>
                </li>
                <li>
                    <a className="icon fa-linkedin-square link al" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/danuakbar/" to="/"><span>danuakbar</span></a>
                </li>
                <li>
                    <a className="icon fa-twitter-square link al" target="_blank" rel="noopener noreferrer" href="https://twitter.com/danuakbar" to="/"><span>danuakbar</span></a>
                </li>
                <li>
                    <a className="icon fa-facebook-square link al" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/danuakbardotcom" to="/"><span>Danu Akbar</span></a>
                </li>
                <li>
                    <a className="icon fa-envelope link al" href="mailto://www.linkedin.com/in/danuakbar/" to="/"><span>awcodify@gmail.com</span></a>
                </li>
                <li>
                    <a className="icon fa-envelope link al" href="mailto://www.linkedin.com/in/danuakbar/" to="/"><span>personal@danucorp.com</span></a>
                </li>
            </ul>
        </article>
        </div >
}
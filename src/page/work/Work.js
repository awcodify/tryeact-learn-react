import React, { Component } from 'react'
import { getAllPosts } from '../../services/article.service'

export class Work extends Component {

    state = {
        articles: [],
        loading: true
    }

    componentDidMount() {
        getAllPosts()
            .then(posts => {
                debugger;
                this.setState({ loading: false, articles: posts.posts })})
    }

    render = () =>{
        if (this.state.loading) {
            return (<div id="main" style={{ height: "500px" }}>
                <article id="work" className="panel" style={{ display: "block" }}>
                    <p style={{textAlign: "center"}}>Hello, the articles will be appeared here :)</p>
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </article>
            </div>)
        } else {
            return (
                <div id="main" style={{ height: "500px" }}>
                    <article id="work" className="panel" style={{ display: "block" }}>
                        <header>
                            <h2>Articles from old blog</h2>
                        </header>
                        <section>
                            <div className="row">
                                <ul>
                                    {this.state.articles.map((res, id) => <li key={id}><a target="_blank" className="link al" href={res.URL} key={id}>{res.title}</a></li>)}
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
                )
        }
}
}
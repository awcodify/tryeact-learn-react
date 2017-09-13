import React, { Component } from 'react'
import { getAllPosts } from '../../services/article.service'

export class Work extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        getAllPosts()
            .then(posts => {this.setState({ articles: posts.posts })})
    }

    render = () =>{
        return (<div id="main" style={{ height: "500px" }}>
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
        </div>)
}
}
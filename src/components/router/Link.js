import React, {Component} from 'react'
import Proptypes from 'prop-types'

export class Link extends Component {
    static contextTypes = {
        route: Proptypes.string,
        linkHandler: Proptypes.func
    }
    handleClick = (event) => {
        event.preventDefault()
        this.context.linkHandler(this.props.to)
    }
    render() {
        const activeClass = this.context.route === this.props.to ? 'active' : ''
        return <a href="#" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
    }
}

Link.propTypes = {
    to: Proptypes.string.isRequired
}
import Proptypes from 'prop-types'
import React, {Component} from 'react'

export class Link extends Component {
    handleClick = (event) => {
        event.preventDefault()
        window.history.pushState(null, '', this.props.to)
    }
    render() {
        return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
    }
}

Link.propTypes = {
    to: Proptypes.string.isRequired
}
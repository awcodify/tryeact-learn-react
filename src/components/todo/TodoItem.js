import PropTypes from 'prop-types';
import React from 'react'
import { partial } from '../../lib/utils'

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)
    return (
        <li>
            <input type="checkbox" 
            onChange={handleToggle} 
            checked={props.isCompleted} />{props.name}
        </li>
    )
}

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool,
    id: PropTypes.number.isRequired
}
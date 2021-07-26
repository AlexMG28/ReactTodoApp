import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const { label } = this.props
        return (
            <span className='d-flex justify-content-between'>
                <span>
                    {label}
                </span>
                <div className='btn-group' role='group'>
                    <button
                        type='button'
                        className='btn btn-outline-success'>
                        Important
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-danger'>
                        Delete
                    </button>
                </div>
            </span>
        )
    }
}


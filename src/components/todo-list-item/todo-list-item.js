import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(( { done } )=>{
            return {
                done: !done
            }
        })
            
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props
        const { done, important } = this.state

        let classNames = 'todo-list-item'

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={ classNames }>
                <span className='todo-list-item-label'
                    onClick={ this.onLabelClick }>
                    { label }
                </span>
                <div className='btn-group' role='group'>
                    <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick={ this.onMarkImportant }>
                        Important
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-danger'
                        onClick={ onDeleted }>
                        Delete
                    </button>
                </div>
            </span>
        )
    }
}


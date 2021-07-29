import React from 'react'

import './todo-list-item.css'

const TodoListItem = ({ 
    label, 
    important, 
    done, 
    onItemDeleted, 
    onToggleImportant, 
    onToggleDone }) => {

    let classNames = 'todo-list-item'

    if ( done ) { classNames += ' done' }

    if ( important ) { classNames += ' important' }

    return (
        <span className={classNames}>
            <span className='todo-list-item-label'
                onClick={onToggleDone}>
                {label}
            </span>
            <div className='btn-group' role='group'>
                <button
                    type='button'
                    className='btn btn-outline-success'
                    onClick={onToggleImportant}>
                    Important
                </button>
                <button
                    type='button'
                    className='btn btn-outline-danger'
                    onClick={onItemDeleted}>
                    Delete
                </button>
            </div>
        </span>
    )

}

export default TodoListItem

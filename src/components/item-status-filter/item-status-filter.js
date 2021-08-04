import React from 'react'

import './item-status-filter.css'

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
]

const itemStatusFilter = ({ filter, onFilterChange }) => {
    
    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = filter === name

        const classNames = 'btn ' + (isActive ? 'btn-primary' : 'btn-outline-secondary')

        return (
            <button
                key={name}
                type='button'
                className={classNames}
                onClick={()=> onFilterChange (name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group' role='group' >
            { buttons }
        </div >
    )
}

export default itemStatusFilter
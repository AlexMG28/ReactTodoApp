import React, { Component } from 'react'

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
    render () {
        return (
            <div className='btn-group' role='group'>
                <button 
                    type='button'
                    className='btn btn-primary'>
                    All
                </button>
                <button 
                    type='button'
                    className='btn btn-outline-primary'>
                    Active
                </button>
                <button 
                    type='button'
                    className='btn btn-outline-primary'>
                    Done
                </button>

            </div>


        )
    }
}
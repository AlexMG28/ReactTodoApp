import React from 'react'

const AppHeader = ( {todo, done} ) => {
    return (
        <div className='d-flex justify-content-between'>
            <h1>React Todo App</h1>
            <h5>Item done {done}, more to do {todo} </h5>
        </div>
    )

}
export default AppHeader
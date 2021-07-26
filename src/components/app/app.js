import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'

const App = () => {

	const todoData = [
		{ label: 'Learn Javascript', important: true, id: 1 },
		{ label: 'Learn React & Redux', important: true, id: 2 },
		{ label: 'Build React TodoApp', important: true, id: 3 },
		{ label: 'Drink beer', important: false, id: 4 },
	]

	return (
		<div>
			<AppHeader />
			<div className='d-flex'>
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos= { todoData } />
		</div>
	)
}

export default App
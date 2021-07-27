import React, { Component } from 'react'

import './app.css'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'


export default class App extends Component {

	state = {
		todoData: [
			{ label: 'Learn Javascript', important: true, id: 1 },
			{ label: 'Learn React & Redux', important: true, id: 2 },
			{ label: 'Build React CRM App', important: true, id: 3 },
			{ label: 'Become a FrontEnd Developer', important: true, id: 4 },
			{ label: 'Drink coffee', important: false, id: 5 },
		]
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const deleteItemIndex = todoData.findIndex((el) => el.id === id)

			const newTodoData = [
				...todoData.slice(0, deleteItemIndex),
				...todoData.slice(deleteItemIndex + 1)
			]
			return {
				todoData: newTodoData
			}
		})
	}


	render() {

		return (
			<div className='todo-app'>
				<AppHeader />
				<div className='d-flex'>
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={this.state.todoData}
					onDeleted={this.deleteItem} />
				<ItemAddForm />
			</div>
		)
	}

}

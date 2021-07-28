import React, { Component } from 'react'

import './app.css'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

export default class App extends Component {

	maxId = 0

	state = {
		todoData: [
			this.createTodoItem('Learn JS'),
			this.createTodoItem('Learn React'),
			this.createTodoItem('Build CRM App'),
			this.createTodoItem('Become a FrontEnd DEV'),
			this.createTodoItem('Drink water'),
		]
	}

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		}
	}

	deleteTodoItem = (id) => {
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

	addTodoItem = (label) => {
		const newItem = this.createTodoItem(label)

		this.setState(({ todoData }) => {
			const newTodoData = [...todoData, newItem]
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
					onItemDeleted={this.deleteTodoItem} />
				<ItemAddForm
					onItemAdded={this.addTodoItem} />
			</div>
		)
	}

}

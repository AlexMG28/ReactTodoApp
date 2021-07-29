import React, { Component } from 'react'

import './app.css'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

export default class App extends Component {

	itemId = 0

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
			id: this.itemId++,
		}
	}

	deleteTodoItem = (id) => {
		this.setState(({ todoData }) => {
			const index = todoData.findIndex((el) => el.id === id)

			const newTodoData = [
				...todoData.slice(0, index),
				...todoData.slice(index + 1)
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

	toggleProperty = (array, id, propName) => {
		const index = array.findIndex((el) => el.id === id)
		const oldItem = array[index]
		const newItem = {
			...oldItem,
			[propName]: !oldItem[propName]
		}
		const newArray = [
			...array.slice(0, index),
			newItem,
			...array.slice(index + 1)
		]

		return newArray

	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
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
					onItemDeleted={this.deleteTodoItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />
				<ItemAddForm
					onItemAdded={this.addTodoItem} />
			</div>
		)
	}

}

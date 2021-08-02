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
		],
		term: '',
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

	onSearchChange = (term) => {
		this.setState({ term })
	}

	search(items, term) {
		if (term.length === 0) {
			return items
		}

		return items.filter((item) => {
			return item.label
				.toLowerCase()
				.indexOf(term.toLowerCase()) > -1
		})
	}

	render() {
		const { todoData, term } = this.state

		const visibleItems = this.search(todoData, term)

		const countDone = todoData.filter((el) => el.done).length
		const countTodo = todoData.length - countDone
		
		return (
			<div className='todo-app'>
				<AppHeader
					done={countDone}
					todo={countTodo} />
				<div className='d-flex'>
					<SearchPanel
						onSearchChange={this.onSearchChange} />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={visibleItems}
					onItemDeleted={this.deleteTodoItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />
				<ItemAddForm
					onItemAdded={this.addTodoItem} />
			</div>
		)
	}

}

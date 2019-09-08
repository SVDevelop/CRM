;
(function () {
	'use strict'

	let database = []
	let idCounter = 0

	const api = {
		addOrder(originalOrder) {
			idCounter++
			const moment = new Date(Date.now())
			const order = Object.assign({
				id: idCounter,
				date: getDateNormalize(moment),
			}, originalOrder)

			database.push(order)
			save()
		},

	
		
		getList() {
			//вщзвращаем копию массива database
			return Array.from(database)
		},

		getOrder (id) {
			for (const order of database) {
				if (order.id === id) {
					return Object.assign({}, order)
				}
			}
			return false
		},

		updateOrder (id, updatedOrder) {
			let order = null

			for( const item of database) {
				if (item.id === id) {
					order = item
					break
				}
			}
			if (order === null) {
				return false
			}
		
			for (const paramName of ['product', 'status', 'name', 'email', 'phone']) {
				order[paramName] = updatedOrder[paramName]
			}

			save()
		
			return true
		
		},

		deleteOrder (id) {
			let order = null
			let item = null

			for( let i = 0; i < database.length; i++) {
				if (database[i][id] === id) {
					item = i
					break
				}
			}
			if (order === null) {
				return false
			}
			database.splice(item, 1)
			// del(i)

			save()
		
			return true
		}

	}

	load()
	
	window.database = api

	function save() {
		const jsonVersion = JSON.stringify(database)

		localStorage.clear()
		localStorage.setItem('database', jsonVersion)
	}

	function load() {
		const jsonVersion = localStorage.getItem('database') || "[]"

		database = JSON.parse(jsonVersion)

		// idCounter = Math.max(...database.map(order => order.id))
		for (const order of database) {
			if (order.id > idCounter) {
				idCounter = order.id
			}
		}
	}

	// function del (i) {
	// 	database.splice(i, 1)
	// }

	function getDateNormalize (moment) {
		const data = moment.getDate().toString().padStart(2, '0')
		const month = (moment.getMonth() + 1).toString().padStart(2, '0')
		const year = moment.getFullYear()

		return data + '.' + month + '.' + year
	}

	function getСounter () {
		let i = {}
		// console.log(database.filter(order => order.status === 'Новые').length)
		i.countAll = database.length,
		i.countNew = [...database.filter(order => order.status === 'Новые')].length,
		i.countWork = [...database.filter(order => order.status === 'В работе')].length,
		i.countCloset = [...database.filter(order => order.status === 'Завершенные')].length,
		i.countArhiv = [...database.filter(order => order.status === 'Архив')].length
		return i
	}
	getСounter()

})();
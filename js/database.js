;
(function () {
	'use strict'

	let database = []
	let idCounter = 0

	const api = {
		addOrder(originalOrder) {
			idCounter++

			const order = Object.assign({
				id: idCounter
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

				if (order === null) {
					return false
				}
				for (const paramName of ['product', 'status', 'name', 'email', 'phone']) {
					order[paramName] = updatedOrder[paramName]
				}

				save()

				return true
			}
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

		// idCounter = Math.max(...database.map(order => arder.id))
		for (const order of database) {
			if (order.id > idCounter) {
				idCounter = order.id
			}
		}

	}

})();
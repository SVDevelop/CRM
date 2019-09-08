;(function () {
	'use srict'

	const cardElement = document.querySelector('#card')
	const id = parseInt(location.search.slice(4))
	const order = database.getOrder(id)
	const count = database.getСounter()
	const listStatusElement = document.querySelector('#listStatus')

	cardElement.innerHTML = cardElement
		.innerHTML
		.replace(/\%ID\%/g, order.id)
		.replace(/\%DATE\%/g, order.date)

	listStatusElement.innerHTML = listStatusElement.innerHTML
		.replace('%COUNT_ALL%', count.countAll || '')
		.replace('%COUNT_NEW%', count.countNew || '')
		.replace('%COUNT_WORK%', count.countWork || '')
		.replace('%COUNT_CLOSE%', count.countCloset || '')
		.replace('%COUNT_ARHIV%', count.countArhiv || '')


	document.querySelector('#product').value = order.product
	document.querySelector('#status').value = order.status
	document.querySelector('#name').value = order.name
	document.querySelector('#email').value = order.email
	document.querySelector('#phone').value = order.phone

	document
		.querySelector('#save')
		.addEventListener('click', function (event) {
			event.preventDefault()

			if (database.updateOrder(id, {
				product: document.querySelector('#product').value,
				status: document.querySelector('#status').value,
				name: document.querySelector('#name').value,
				email: document.querySelector('#email').value,
				phone: document.querySelector('#phone').value
			})) {
				location.replace('02-crm-all-bids.html')
			} else {
				alert('Что-то пошло не так (')
			}
		})

	document
		.querySelector('#delete')
		.addEventListener('click', function (event) {
			event.preventDefault()
			
			if (database.deleteOrder(id)) {
				location.replace('02-crm-all-bids.html')
			}else {
				alert('Что-то пошло не так (')
			}	
		})

})();
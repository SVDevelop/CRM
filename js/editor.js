;(function () {
	'use srict'

	// inputGroupSelect01
	const cardElement = document.querySelector('#card')
	const id = parseInt(location.search.slice(4))
	const order = database.getOrder(id)

	cardElement.innerHTML = cardElement
		.innerHTML
		.replace(/\%ID\%/g, order.id)
		.replace(/\%DATE\%/g, order.date)

	document.querySelector('#product').value = order.product
	document.querySelector('#status').value = order.status
	document.querySelector('#name').value = order.name
	document.querySelector('#email').value = order.email
	document.querySelector('#phone').value = order.phone

	document
		.querySelector('#save')
		.addEventListener('click', function (event) {
			event.preventDefault()

			const updatedOrder = {
				product: document.querySelector('#product').value,
				status: document.querySelector('#status').value,
				name: document.querySelector('#name').value,
				email: document.querySelector('#email').value,
				phone: document.querySelector('#phone').value
			}
			//database.updateOrder(id, updateOrder)
			const answer = database.updateOrder(id, updatedOrder)
console.log(database.updateOrder(id, updatedOrder))

			if (answer) {
				location.replace('02-crm-all-bids.html')
			} else {
				alert('Что-то пошло не так (')
			}
		})
	// console.log(getCount())
	

})();
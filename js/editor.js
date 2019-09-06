;(function () {
	'use srict'

	// inputGroupSelect01
	const cardElement = document.querySelector('#card')
	const id = parseInt(location.search.slice(4))
	const order = database.getOrder(id)

	cardElement.innerHTML = cardElement.innerHTML.replace(/\%ID\%/g, order.id)//.replace(/\%DATE\%/g, order.Date)

	const productElement = document.querySelector('#product')
	const statusElement = document.querySelector('#status')

	const nameElement = document.querySelector('#name')
	const emailElement = document.querySelector('#email')
	const phoneElement = document.querySelector('#phone')

	productElement.value = order.product
	statusElement.value = order.status
	nameElement.value = order.name
	emailElement.value = order.email
	phoneElement.value = order.phone

	document.querySelector('#save')
		.addEventListener('click', function (event) {
			event.preventDefault()

			const updateOrder = {
				product: productElement.value,
				status: statusElement.value,
				name: nameElement.value,
				email: emailElement.value,
				phone: phoneElement.value
			}

			const answer = database.updateOrder(id, updateOrder)

			if (answer) {
				location.replace('02-crm-all-bids.html')
			} else {
				alert('Что-то пошло не так (')
			}
		})
	console.log(order)
	

})();
;
(function () {
	'use strict'

	document.querySelector('#submitButton')
		.addEventListener('click', function (event) {
			event.preventDefault()

			database.addOrder({
				name: document.querySelector('#nameFamily').value,
				phone: document.querySelector('#phoneNumber').value,
				email: document.querySelector('#email').value,
				product: document.querySelector('#productTitle').value,
				// createAt: Date.now(),
				status: 'Новые'
			})
			location.replace('02-crm-all-bids.html')
		})

})();
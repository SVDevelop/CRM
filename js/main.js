;(function () {
	'use strict'

	const trElementTemplate = `
<tr>
	<th scope="row">%ID%</th>
	<td>%DATE%</td>
	<td>%COURSE_TITLE%</td>
	<td>%NAME%</td>
	<td>%EMAIL%</td>
	<td>%PHONE%</td>
	<td>
		<div class="badge badge-pill badge-danger">%STATUS%</div>
	</td>
	<td><a href="03-crm-edit-bid.html?id=%ID%">Редактировать</a></td>
</tr>`

	const ordersTabel = document.querySelector('#ordersTabel')

	const filters = {
		product: false,
		name: false,
		status: false,
		email: false,
		phone: false
	}
	
	update ()
	

	document.querySelector('#products')
		.addEventListener('click', function () {
			filters.product = this.value || false
			update()
		})

	const statusElement = document.querySelector('#status').children
	
	for (const status of statusElement) {
		status.addEventListener('click', function () {
			// console.log(this.textContent)
			
			filters.status = this.textContent || false
			console.log(filters.status)
			
			update()
		})
	}
		

	function update () {
		let orders = database.getList()
	
		if (filters.product !== false) {
			orders = orders.filter(order => order.product === filters.product)
		}

		if (filters.status !== false && filters.status !== 'Все') {
			orders = orders.filter(order => order.status === filters.status)
		}
	// console.log(orders)
	
		ordersTabel.innerHTML = ''

		for (const order of orders) {
			const trElement = document.createElement('tr')
			const moment = new Date(order.createAt)

			trElement.innerHTML = trElementTemplate
				.replace(/\%ID\%/g, order.id)
				.replace('%COURSE_TITLE%', order.product)
				.replace('%NAME%', order.name)
				.replace('%EMAIL%', order.email)
				.replace('%PHONE%', order.phone)
				.replace('%DATE%', getDateNormalize(moment))
				.replace('%STATUS%', order.status)
			
			ordersTabel.append(trElement)

		}

	}

	function getDateNormalize (moment) {
		const data = moment.getDate().toString().padStart(2, '0')
		const month = (moment.getMonth() + 1).toString().padStart(2, '0')
		const year = moment.getFullYear()

		return data + '.' + month + '.' + year
	}


})();
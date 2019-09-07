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
	const ulElementTemplate = `
		<li><a href="#" class="active">Все вместе <div class="badge">%COUNT%</div></a></li>
		<li><a href="#">Новые <div class="badge">%COUNT_NEW%</div></a></li>
		<li><a href="#">В работе <div class="badge">%COUNT_WORK%</div></a></li>
		<li><a href="#">Завершенные <div class="badge">%COUNT_CLOSE%</div></a></li>
		<li><a href="#">Архив <div class="badge">%COUNT_ARHIV%</div></a></li>`

	const ordersTabel = document.querySelector('#ordersTabel')
	const statusApplicationElement = document.querySelector('#statusApplication')

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
	// console.log(statusApplicationElement)
	
		ordersTabel.innerHTML = ''
		
		
		for (const order of orders) {
			const trElement = document.createElement('tr')
			// const moment = new Date(order.createAt)
			
			// let statusApplicationCount = {
			// 	we: 0,
			// 	work: 0,
			// 	close: 0,
			// 	arhiv: 0
			// }
			// let i = 0
			// // console.log(order.status)
			// if (order.status === 'Новые') {
			// 	i++
			// 	// console.log(statusApplicationCount.we)
			// }
			// switch (order.status) {
			// 	case 'Новые':
			// 		statusApplicationCount.new += 1
			// console.log(typeof(statusApplicationCount.new))

			// 	break
			// 	case 'В работе':
			// 		statusApplicationCount.work++
			// 	break
			// 	case 'Завершенные':
			// 		statusApplicationCount.close++
			// 	break
			// 	case 'Архив':
			// 		statusApplicationCount.arhiv++
			// 	break
			// 	default:
			// 	orders.length
			// 	break
			// }


			//countAll: database.length,
// 		countNew: [...database.filter(order => order.status === 'Новые')].length,
// 		countWork: [...database.filter(order => order.status === 'В работе')].length,
// 		countCloset: [...database.filter(order => order.status === 'Завершенные')].length,
// 		countArhiv: [...database.filter(order => order.status === 'Архив')].length

			
			trElement.innerHTML = trElementTemplate
				.replace(/\%ID\%/g, order.id)
				.replace('%COURSE_TITLE%', order.product)
				.replace('%NAME%', order.name)
				.replace('%EMAIL%', order.email)
				.replace('%PHONE%', order.phone)
				// .replace('%DATE%', getDateNormalize(moment))
				.replace('%DATE%', order.date)
				.replace('%STATUS%', order.status)

			statusApplicationElement.innerHTML = ulElementTemplate
				.replace('%COUNT%', 1)
				.replace('%COUNT_NEW%', )
				.replace('%COUNT_WORK%', )
				.replace('%COUNT_CLOSE%', )
				.replace('%COUNT_ARHIV%', )
			
			ordersTabel.append(trElement)
			// statusApplication.append(liElement)
			// console.log(statusApplicationCount.we)
			

		}

	}

	// function getDateNormalize (moment) {
	// 	const data = moment.getDate().toString().padStart(2, '0')
	// 	const month = (moment.getMonth() + 1).toString().padStart(2, '0')
	// 	const year = moment.getFullYear()

	// 	return data + '.' + month + '.' + year
	// }

	function getCount () {
		console.log(orders)
		
	}
	
	// function getStatusCount (order) {
	// 	const statusApplicationCount = {
	// 		new: 0,
	// 		work: 0,
	// 		close: 0,
	// 		arhiv: 0
	// 	}
	// 	// console.log(order.status)
	// 	switch (order.status) {
	// 		case 'Новые':
	// 			statusApplicationCount.new++
	// 		break
	// 		case 'В работе':
	// 			statusApplicationCount.work++
	// 		break
	// 		case 'Завершенные':
	// 			statusApplicationCount.close++
	// 		break
	// 		case 'Архив':
	// 			statusApplicationCount.arhiv++
	// 		break
	// 		default:
	// 		orders.length
	// 		break
	// 	}
	// 	return statusApplicationCount
	// }
	// console.log(database.getCount)


})();
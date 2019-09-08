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
				<div class="badge badge-pill %BADGE%">%STATUS%</div>
			</td>
			<td><a href="03-crm-edit-bid.html?id=%ID%">Редактировать</a></td>
		</tr>`
	const ulElementTemplate = `
		<li><a href="#">Все вместе <div class="badge">%COUNT%</div></a></li>
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
// statusFiltred
	for (const status of document.querySelector('#status').children) {
		status.addEventListener('click', function (event) {
			event.preventDefault()
			filters.status = this.textContent || false
			update()
		})
	}

	for (const status of statusApplication.children) {
		status.querySelector('a').addEventListener('click', function (event) {
			event.preventDefault()
			for (const item of this.parentElement.parentElement.children) {
				if (item.children[0] === this) {
					item.children[0].classList.add("active")
				} else {
					item.children[0].classList.remove("active")
				}
				
			}
			//!!! filters.status = this.innerText.slice(0, this.innerText.search(/\d/) > 0 ? this.innerText.search(/\d/) : undefined).trim() || false
			// update()
			
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
	
		ordersTabel.innerHTML = ''
		
		for (const order of orders) {
			const trElement = document.createElement('tr')

			trElement.innerHTML = trElementTemplate
				.replace(/\%ID\%/g, order.id)
				.replace('%COURSE_TITLE%', order.product)
				.replace('%NAME%', order.name)
				.replace('%EMAIL%', order.email)
				.replace('%PHONE%', order.phone)
				.replace('%BADGE%', database.getClassBadge(order.status) || '')
				.replace('%DATE%', order.date)
				.replace('%STATUS%', order.status)

			statusApplicationElement.innerHTML = ulElementTemplate
				.replace('%COUNT%', database.getСounter().countAll || '')
				.replace('%COUNT_NEW%', database.getСounter().countNew || '')
				.replace('%COUNT_WORK%', database.getСounter().countWork || '')
				.replace('%COUNT_CLOSE%', database.getСounter().countCloset || '')
				.replace('%COUNT_ARHIV%', database.getСounter().countArhiv || '')
			
			ordersTabel.append(trElement)
			

		}
		console.log()

	}

	function statusFiltred () {
			
		filters.status = this.textContent || false
		// console.log(filters.status)
		
		update()
	}
	// function getDateNormalize (moment) {
	// 	const data = moment.getDate().toString().padStart(2, '0')
	// 	const month = (moment.getMonth() + 1).toString().padStart(2, '0')
	// 	const year = moment.getFullYear()

	// 	return data + '.' + month + '.' + year
	// }

})();
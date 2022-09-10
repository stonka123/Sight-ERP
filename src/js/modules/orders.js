import { active, titleWorkInfo } from './start.js'

const startOrdersBtn = document.querySelector('.orders-container__start')
const panelOrders = document.querySelector('.orders-container__panel')
const errorPanel = document.querySelector('.orders-container--error')

// PANEL
const addOrders = document.querySelector('.orders-container__panel-bottom-add')
const closePanel = document.querySelector('.orders-container__panel-bottom-close')
const errorOrders = document.querySelector('.orders-container__panel-top--error')
const errorPosition = document.querySelector('.orders-container__panel-mid--error')
const category = document.querySelector('#category')
const orderInput = document.querySelector('.orders-container__panel-top-input')
const orderArea = document.querySelector('.orders-container')

let orderID = 1
let selectedValue

const showPanelOrders = () => {
	if (active) {
		panelOrders.style.display = 'flex'
		errorPanel.style.visibility = 'hidden'
	} else {
		errorPanel.style.visibility = 'visible'
	}
}

const closePanelOrders = () => {
	panelOrders.style.display = 'none'
	errorOrders.style.visibility = 'hidden'
	errorPosition.style.visibility = 'hidden'
	category.selectedIndex = 0
	orderInput.value = ''
	errorPanel.style.visibility = 'hidden'
}

const addNewOrder = () => {
	if (orderInput.value !== '' && category.options[category.selectedIndex].value !== '0') {
		errorOrders.style.visibility = 'hidden'
		errorPosition.style.visibility = 'hidden'
		createNewOrder()

		closePanelOrders()
		errorPanel.style.visibility = 'hidden'
	} else if (orderInput.value === '' && category.options[category.selectedIndex].value === '0') {
		errorOrders.style.visibility = 'visible'
		errorPosition.style.visibility = 'visible'
	} else if (orderInput.value !== '' && category.options[category.selectedIndex].value === '0') {
		errorOrders.style.visibility = 'hidden'
		errorPosition.style.visibility = 'visible'
	} else if (orderInput.value == '' && category.options[category.selectedIndex].value !== '0') {
		errorOrders.style.visibility = 'visible'
		errorPosition.style.visibility = 'hidden'
	}
}

const createNewOrder = () => {
	const yearOrder = new Date().getFullYear().toString().slice(-2)
	const newOrder = document.createElement('div')
	newOrder.classList.add('orders-container__area-new')
	newOrder.setAttribute('id', orderID)
	newOrder.innerHTML = `
							<div class="container-orders--between">
                                <p class="orders-container__area-new-number">${orderID}.</p>
                                <div class="orders-container__area-new-left">
                                    <label for="" class="orders-container__area-new-left-label">Numer zlecenia:</label>
                                    <div class="orders-container__area-new-left-orders">${yearOrder}R/${
		orderInput.value
	}</div>
                                </div>
                                <div class="orders-container__area-new-right"><label for=""
                                        class="orders-container__area-new-right-label">Stanowisko: </label>
                                    <div class="orders-container__area-new-right-position">${
																			category.options[category.selectedIndex].text
																		}</div>
                                </div>
								</div>
								<p class="orders-container__area-new-text">Zakończone <i
                                        class="fa-solid fa-check"></i>
                                </p>
							<button class="orders-container__area-new-finish"><i
					class="fa-solid fa-flag"></i><span>Zakończ</span></button>
					 </div>
					
                            `

	orderArea.append(newOrder)
	orderID++
	completeOrder()
}
const completeOrder = () => {
	const finishOrderBtn = document.querySelectorAll('.orders-container__area-new-finish')
	finishOrderBtn.forEach(el => {
		el.addEventListener('click', () => {
			el.classList.add('button-hide')
			el.parentElement.classList.add('finish-order')
			el.previousElementSibling.classList.add('finish-show')
		})
	})
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}

startOrdersBtn.addEventListener('click', showPanelOrders)
closePanel.addEventListener('click', closePanelOrders)
addOrders.addEventListener('click', addNewOrder)
window.addEventListener('change', selectValue)

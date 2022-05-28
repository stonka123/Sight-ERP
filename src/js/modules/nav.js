import { enterCheck } from './start.js'

const navStart = document.querySelector('.nav-start')
const navOrders = document.querySelector('.nav-orders')
const navTasks = document.querySelector('.nav-tasks')
const navShop = document.querySelector('.nav-shop')
const navCompany = document.querySelector('.nav-company')
const contentStart = document.querySelector('.start')
const contentOrders = document.querySelector('.orders')
const contentTasks = document.querySelector('.tasks')
const contentShop = document.querySelector('.shop')
const contentCompany = document.querySelector('.company')
const mainContent = document.querySelector('.main-content')
const contentArea = document.querySelector('.content')
const homeIcon = document.querySelector('.start-icon')
const tasksIcon = document.querySelector('.tasks-icon')
// const navItems = document.querySelectorAll('.nav-items__item')

export const showStart = () => {
	if (contentArea.classList.contains('start') === false) {
		contentStart.style.display = 'block'
		contentTasks.style.display = 'none'
		contentShop.style.display = 'none'
		contentCompany.style.display = 'none'
		contentOrders.style.display = 'none'
	}
}
export const showOrders = () => {
	if (contentArea.classList.contains('orders') === false) {
		contentOrders.style.display = 'block'
		contentCompany.style.display = 'none'
		contentShop.style.display = 'none'
		contentStart.style.display = 'none'
		contentTasks.style.display = 'none'
	}
}

export const showTasks = () => {
	if (contentArea.classList.contains('tasks') === false) {
		contentTasks.style.display = 'block'
		contentStart.style.display = 'none'
		contentShop.style.display = 'none'
		contentCompany.style.display = 'none'
		contentOrders.style.display = 'none'
	}
}
export const showShop = () => {
	if (contentArea.classList.contains('shop') === false) {
		contentShop.style.display = 'block'
		contentStart.style.display = 'none'
		contentTasks.style.display = 'none'
		contentCompany.style.display = 'none'
		contentOrders.style.display = 'none'
	}
}
export const showCompany = () => {
	if (contentArea.classList.contains('company') === false) {
		contentCompany.style.display = 'block'
		contentShop.style.display = 'none'
		contentStart.style.display = 'none'
		contentTasks.style.display = 'none'
		contentOrders.style.display = 'none'
	}
}

const navItems = [...document.querySelectorAll('.nav-icons')]
const navIcons = [...document.querySelectorAll('.nav-items__item--icon')]

document.querySelector('.nav-items').addEventListener('click', e => {
	const closestElement = e.target.closest('.nav-icons')
	if (!closestElement) {
		return
		console.log('lol')
	}
	const closestIcons = closestElement.children[0]
	const navTarget = e.target

	if (!navTarget.classList.contains('nav-items')) {
		clear()
	}
	setActive(closestElement, e, navTarget, closestIcons)
})

function clear(navTarget) {
	navItems.forEach(element => element.classList.remove('nav-spy'))
	navIcons.forEach(element => element.classList.remove('icon-spy'))
}

function setActive(closestElement, e, navTarget, closestIcons) {
	if (!navTarget.classList.contains('nav-items')) {
		closestElement.classList.add('nav-spy')
		closestIcons.classList.add('icon-spy')
	}
}

navStart.addEventListener('click', showStart)
navTasks.addEventListener('click', showTasks)
navShop.addEventListener('click', showShop)
navCompany.addEventListener('click', showCompany)
navOrders.addEventListener('click', showOrders)

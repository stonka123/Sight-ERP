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

const sectionTest = [navStart, navOrders, navShop, navTasks, navCompany]

const sections = document.querySelectorAll('.nav-items__item')

export const showContent = () => {
	sectionTest.forEach(item => {
		item.addEventListener('click', e => {
			const targetNav = e.target.closest('.nav-items__item')

			if (targetNav.classList.contains('nav-start')) {
				clearSection()
				contentStart.style.display = 'block'
			} else if (targetNav.classList.contains('nav-tasks')) {
				clearSection()
				contentTasks.style.display = 'flex'
			} else if (targetNav.classList.contains('nav-shop')) {
				clearSection()
				contentShop.style.display = 'flex'
			} else if (targetNav.classList.contains('nav-orders')) {
				clearSection()
				contentOrders.style.display = 'flex'
			} else if (targetNav.classList.contains('nav-company')) {
				clearSection()
				contentCompany.style.display = 'flex'
			}
		})
		function clearSection() {
			contentTasks.style.display = 'none'
			contentStart.style.display = 'none'
			contentShop.style.display = 'none'
			contentCompany.style.display = 'none'
			contentOrders.style.display = 'none'
		}
	})
}
showContent()
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


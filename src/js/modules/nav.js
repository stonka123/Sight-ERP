import { enterCheck } from './start.js'

const navStart = document.querySelector('.nav-start')
const navTasks = document.querySelector('.nav-tasks')
const contentStart = document.querySelector('.start')
const contentTasks = document.querySelector('.tasks')
const mainContent = document.querySelector('.main-content')
const contentArea = document.querySelector('.content')
const homeIcon = document.querySelector('.start-icon')
const tasksIcon = document.querySelector('.tasks-icon')
// const navItems = document.querySelectorAll('.nav-items__item')

export const showStart = () => {
	if (contentArea.classList.contains('start') === false) {
		contentStart.style.display = 'block'
		contentTasks.style.display = 'none'
		// observeSection(navStart)
	}
}

export const showTasks = () => {
	if (contentArea.classList.contains('tasks') === false) {
		contentTasks.style.display = 'flex'
		contentStart.style.display = 'none'
		// observeSection(navTasks)
	}
}

// export const observeSection = e => {
// 	if (e.hash === '#home') {
// 		homeIcon.classList.add('icon-spy')
// 		tasksIcon.classList.remove('icon-spy')
// 	} else if (e.hash === '#tasks') {
// 		tasksIcon.classList.add('icon-spy')
// 		homeIcon.classList.remove('icon-spy')
// 	}
// }

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

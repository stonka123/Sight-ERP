const navStart = document.querySelector('.nav-start')
const navTasks = document.querySelector('.nav-tasks')
const contentStart = document.querySelector('.start')
const contentTasks = document.querySelector('.tasks')
const mainContent = document.querySelector('.main-content')
const contentArea = document.querySelector('.content')
const homeIcon = document.querySelector('.start-icon')
const tasksIcon = document.querySelector('.tasks-icon')

export const showStart = () => {
	if (contentArea.classList.contains('start') === false) {
		contentStart.style.display = 'block'
		contentTasks.style.display = 'none'
		observeSection(navStart)
	}
}

export const showTasks = () => {
	if (contentArea.classList.contains('tasks') === false) {
		contentTasks.style.display = 'flex'
		contentStart.style.display = 'none'
		observeSection(navTasks)
	}
}

export const observeSection = e => {
	if (e.hash === '#home') {
		homeIcon.classList.add('icon-spy')
		tasksIcon.classList.remove('icon-spy')
	} else if (e.hash === '#tasks') {
		tasksIcon.classList.add('icon-spy')
		homeIcon.classList.remove('icon-spy')
	}
}
navStart.addEventListener('click', showStart)
navTasks.addEventListener('click', showTasks)
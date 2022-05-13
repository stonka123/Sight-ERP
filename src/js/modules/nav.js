const navStart = document.querySelector('.nav-start')
const navTasks = document.querySelector('.nav-tasks')
const contentStart = document.querySelector('.start')
const contentTasks = document.querySelector('.tasks')
const mainContent = document.querySelector('.main-content')
const contentArea = document.querySelector('.content')

export const showStart = () => {
	if (contentArea.classList.contains('start') === false) {
		contentStart.style.display = 'block'
		contentTasks.style.display = 'none'
	}
}

export const showTasks = () => {
	if (contentArea.classList.contains('tasks') === false) {
		contentTasks.style.display = 'block'
		contentStart.style.display = 'none'
	}
}

navStart.addEventListener('click', showStart)
navTasks.addEventListener('click', showTasks)

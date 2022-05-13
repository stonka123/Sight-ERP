const navStart = document.querySelector('.nav-start')
const navTasks = document.querySelector('.nav-tasks')
const contentStart = document.querySelector('.content-start')
const contentTasks = document.querySelector('.content-tasks')
const mainContent = document.querySelector('.main-content')
const testowo = document.querySelector('.testowo')

export const showStart = () => {
	if (testowo.classList.contains('content-start') === false) {
		contentStart.style.display = 'none'
		contentTasks.style.display = 'block'
		console.log(contentStart)
	}
}

navTasks.addEventListener('click', showStart)

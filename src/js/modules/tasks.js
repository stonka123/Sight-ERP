const inputTask = document.querySelector('.tasks-container__top-input')
const addTaskBtn = document.querySelector('.tasks-container__top-btn')
const errorInfo = document.querySelector('.tasks-container__top-info')

const taskArea = document.querySelector('.tasks-container__bottom')
const taskText = document.querySelector('.task__text')
const task = document.getElementsByClassName('task')

const editPanelPopup = document.querySelector('.popup')
const popupInput = document.querySelector('.popup-input')
const editTaskBtn = document.querySelector('.task__text-tools-edit')

const popupInfo = document.querySelector('.popup-info')
const closePanelPopup = document.querySelector('.cancel')
const acceptPanelPopul = document.querySelector('.accept')

let taskID = 1
let editedTask
// let popupInput
const addNewTask = () => {
	console.log(inputTask.value)
}

const createNewTask = () => {
	if (inputTask.value) {
		const newTask = document.createElement('div')
		newTask.classList.add('task')
		newTask.setAttribute('id', taskID)

		newTask.innerHTML = `<p class="task__text">${inputTask.value}</p><div class="task__text-tools"><button class="task__text-tools-complete"><i class="fas fa-check"></i></button><button class="task__text-tools-edit"><i class="fa-solid fa-pen-to-square"></i></button>
		<button class="task__text-tools-delete"><i class="fas fa-times"></i></button></div>
	`

		taskArea.appendChild(newTask)
		taskID++
		checkEmptyArea()

		const btns = document.querySelectorAll('.task__text-tools-delete')
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', checkClick)
		}
		const editTaskBtn = document.querySelectorAll('.task__text-tools-edit')
		for (let i = 0; i < editTaskBtn.length; i++) {
			editTaskBtn[i].addEventListener('click', checkClick)
		}
		const completeTaskBtn = document.querySelectorAll('.task__text-tools-complete')
		for (let i = 0; i < completeTaskBtn.length; i++) {
			completeTaskBtn[i].addEventListener('click', checkClick)
		}
	} else {
		errorInfo.classList.add('visible')
		errorInfo.innerText = 'Wpisz treść zadania !'
		console.log('puste')
	}
}

const checkClick = e => {
	if (e.target.closest('button').classList.contains('task__text-tools-delete')) {
		console.log('ok delete')
		e.target.closest('.task').remove()
		checkEmptyArea()
	} else if (e.target.closest('button').classList.contains('task__text-tools-edit')) {
		// editPanelPopup.classList.add('show')
		editTask(e)
	} else if (e.target.closest('button').classList.contains('task__text-tools-complete')) {
		e.target.closest('.task').classList.add('completed')
		e.target.closest('.task__text-tools').classList.add('completed-tools')
		console.log('ok complete')
	}
}
const checkEmptyArea = () => {
	if (task.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.'
		errorInfo.classList.add('visible')
	} else {
		errorInfo.classList.remove('visible')
	}
}
const closeEditPopul = () => {
	editPanelPopup.classList.remove('show')
}
const checkInput = () => {
	if (inputTask.value === '') {
		console.log('puste')
	}
}

const editTask = e => {
	const oldTask = e.target.closest('.task').id
	editedTask = document.getElementById(oldTask)
	editPanelPopup.classList.add('show')
	popupInput.value = editedTask.firstChild.textContent
}

const changeTask = () => {
	if (!popupInput.value) {
		popupInfo.textContent = 'Wpisz treść zadania.'
	} else {
		editedTask.firstChild.textContent = popupInput.value
		editPanelPopup.classList.remove('show')
		popupInfo.textContent = ''
	}
}

checkEmptyArea()
addTaskBtn.addEventListener('click', createNewTask)

closePanelPopup.addEventListener('click', closeEditPopul)
acceptPanelPopul.addEventListener('click', changeTask)

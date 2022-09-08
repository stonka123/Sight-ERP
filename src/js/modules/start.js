const startBtn = document.querySelector('.start-container__text-button--start')
const startContainer = document.querySelector('.start')
const startPresence = document.querySelector('.start-presence')
const endButton = document.querySelector('.start-container__text-button--end')
export const titleWorkInfo = document.querySelector('.start-container__text')



let startBox

let day
let startInput
let startParagraphWork
let startHourInput

let endWork
let endHourInput
let endHourWork


let countDay
let countWorkDay = 1

export let active = true

export const createDayWork = () => {
	let now = new Date()

	let startDate =
		now.getFullYear() +
		'-' +
		(now.getMonth() + 1).toString().replace(/^(\d)$/, '0$1') +
		'-' +
		now
			.getDate()
			.toString()
			.replace(/^(\d)$/, '0$1')
	let startHour =
		now.getHours() +
		':' +
		now
			.getMinutes()
			.toString()
			.replace(/^(\d)$/, '0$1')

	// change title info
	titleWorkInfo.textContent = 'Zakończ pracę!'

	// create end btn
	endButton.style.display = 'block'
	// hidden start btn
	startBtn.style.display = 'none'
	// creat box start work

	startBox = document.createElement('div')
	startBox.classList.add('presence')
	// create date start
	countDay = document.createElement('p')
	countDay.classList.add('presence-number')
	countDay.innerText = countWorkDay++ + '.' + ' '

	day = document.createElement('p')
	day.classList.add('presence-day')
	day.innerText = ''

	startInput = document.createElement('span')
	startInput.setAttribute('id', 'presence-day-input')
	startInput.innerText = startDate

	// create start hour
	startParagraphWork = document.createElement('p')
	startParagraphWork.classList.add('presence-hour-start')
	startParagraphWork.innerText = 'Start:'

	startHourInput = document.createElement('span')
	startHourInput.setAttribute('id', 'presence-hour-start-input')
	startHourInput.innerText = startHour

	// create end hour
	endWork = document.createElement('p')
	endWork.classList.add('presence-hour-end')
	endWork.innerText = 'Godzina zakoń.:'

	endHourInput = document.createElement('span')
	endHourInput.setAttribute('id', 'presence-hour-end-input')
	endHourInput.innerText = endHourWork
	// console.log(active)

	// append
	startPresence.appendChild(startBox)
	startBox.appendChild(countDay)
	startBox.appendChild(day)
	day.appendChild(startInput)
	startBox.appendChild(startParagraphWork)
	startParagraphWork.appendChild(startHourInput)
}
export const finishDayWork = () => {
	let active = false
	// title change
	titleWorkInfo.textContent = 'Rozpocznij pracę!'

	let today = new Date()
	let endHourWork =
		today.getHours() +
		':' +
		today
			.getMinutes()
			.toString()
			.replace(/^(\d)$/, '0$1')
	// create end hour
	endWork = document.createElement('p')
	endWork.classList.add('presence-hour-end')
	endWork.innerText = 'Koniec:'

	endHourInput = document.createElement('span')
	endHourInput.setAttribute('id', 'presence-hour-end-input')
	endHourInput.innerText = endHourWork
	startBox.appendChild(endWork)
	endWork.appendChild(endHourInput)
	endButton.style.display = 'none'
	startBtn.style.display = 'block'
}
export const enterCheck = event => {
	if (
		event.keyCode === 13 &&
		endButton.style.display !== 'block' &&
		window.getComputedStyle(startContainer).display === 'block'
	) {
		console.log('enter')
		createDayWork()
	} else if (
		event.keyCode === 13 &&
		endButton.style.display === 'block' &&
		window.getComputedStyle(startContainer).display === 'block'
	) {
		finishDayWork()
	}
}

startBtn.addEventListener('click', createDayWork)
document.addEventListener('keyup', enterCheck)
endButton.addEventListener('click', finishDayWork)

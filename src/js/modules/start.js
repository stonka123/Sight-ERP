const startBtn = document.querySelector('.start-container__text-button--start')
const workPanel = document.querySelector('.start-container')
const startContainer = document.querySelector('.start')
const startPresence = document.querySelector('.start-presence')
const endButton = document.querySelector('.start-container__text-button--end')
export const titleWorkInfo = document.querySelector('.start-container__text')
const sectionLogin = document.querySelector('.login')

let $startBox
let $dzien
let $endBtn
let $startInput
let $godzina
let $startHourInput
let endWork
let endHourInput
let $now
let $today
let $startDate
let $startHour
let endHourWork
export let active = true

export const startWork = () => {
	const day = document.getElementById('presence-day-input')
	const hourStart = document.getElementById('presence-hour-start-input')
	const hourEnd = document.getElementById('presence-hour-end-input')
	createDayWork()
}

export const createDayWork = () => {
	let $now = new Date()
	let $today = new Date()
	let $startDate = $now.getFullYear() + '-' + ($now.getMonth() + 1) + '-' + $now.getDate()
	let $startHour = $now.getHours() + ':' + $now.getMinutes()

	// change title info
	titleWorkInfo.textContent = 'Zakończ pracę'

	// create end btn
	endButton.style.display = 'block'
	// hidden start btn
	startBtn.style.display = 'none'
	// creat box start work
	$startBox = document.createElement('div')
	$startBox.classList.add('presence')
	// create date start
	$dzien = document.createElement('p')
	$dzien.classList.add('presence-day')
	$dzien.innerText = ''

	$startInput = document.createElement('span')
	$startInput.setAttribute('id', 'presence-day-input')
	$startInput.innerText = $startDate

	// create start hour
	$godzina = document.createElement('p')
	$godzina.classList.add('presence-hour-start')
	$godzina.innerText = 'Start:'

	$startHourInput = document.createElement('span')
	$startHourInput.setAttribute('id', 'presence-hour-start-input')
	$startHourInput.innerText = $startHour

	// create end hour
	endWork = document.createElement('p')
	endWork.classList.add('presence-hour-end')
	endWork.innerText = 'Godzina zakoń.:'

	endHourInput = document.createElement('span')
	endHourInput.setAttribute('id', 'presence-hour-end-input')
	endHourInput.innerText = endHourWork
	// console.log(active)

	// append
	startPresence.appendChild($startBox)
	$startBox.appendChild($dzien)
	$dzien.appendChild($startInput)
	$startBox.appendChild($godzina)
	$godzina.appendChild($startHourInput)
}
export const finishDayWork = () => {
	let active = false
	// title change
	titleWorkInfo.textContent = 'Zacznij pracę'

	let $today = new Date()
	let endHourWork = $today.getHours() + ':' + $today.getMinutes()
	// create end hour
	endWork = document.createElement('p')
	endWork.classList.add('presence-hour-end')
	endWork.innerText = 'Koniec:'

	endHourInput = document.createElement('span')
	endHourInput.setAttribute('id', 'presence-hour-end-input')
	endHourInput.innerText = endHourWork
	$startBox.appendChild(endWork)
	endWork.appendChild(endHourInput)
	endButton.style.display = 'none'
	startBtn.style.display = 'block'

	// console.log(active)
}
export const enterCheck = () => {
	if (
		event.keyCode === 13 &&
		endButton.style.display !== 'block' &&
		sectionLogin.style.display === 'none' &&
		window.getComputedStyle(startContainer).display === 'block'
	) {
		createDayWork()
	} else if (
		event.keyCode === 13 &&
		endButton.style.display === 'block' &&
		sectionLogin.style.display === 'none' &&
		window.getComputedStyle(startContainer).display === 'block'
	) {
		finishDayWork()
	}
}

startBtn.addEventListener('click', startWork)
document.addEventListener('keyup', enterCheck)

endButton.addEventListener('click', finishDayWork)

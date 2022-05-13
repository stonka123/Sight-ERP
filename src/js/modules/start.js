const startBtn = document.querySelector('.container-start__text-button')

export const startWork = () => {
	const day = document.querySelector('.work-date')
	const hour = document.getElementsByClassName('work-hour')

	const today = new Date()
	const startDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
	const startHour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
	day.innerHTML = startDate
	hour.innerHTML = startHour

	console.log(day)
}

startBtn.addEventListener('click', startWork)

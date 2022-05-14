const startBtn = document.querySelector('.container-start__text-button')

export const startWork = () => {
	const day = document.getElementById('work-date')
	const hour = document.getElementById('work-hour')
	const today = new Date()

	const startDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
	const startHour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
	day.innerHTML = startDate
	hour.innerHTML = startHour
	console.log(startHour)
}

startBtn.addEventListener('click', startWork)

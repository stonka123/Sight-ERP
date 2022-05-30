document.querySelector('.dashboard').addEventListener('click', e => {
	const headers = [...document.querySelectorAll('.header')]

	headers.forEach(el => {
		const shopTarget = e.target.closest('.nav-items')
		const found = el.classList.contains('header')

		if (!shopTarget) {
			el.classList.add('hide-header')
		} else {
			el.classList.remove('hide-header')
		}
	})
})

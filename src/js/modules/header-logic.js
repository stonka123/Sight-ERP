const headerShop = document.querySelector('.shop__header')

document.querySelector('.dashboard').addEventListener('click', e => {
	const contentShop = document.querySelector('.shop')
	const shopTarget = e.target.closest('.nav-shop')
	console.log(shopTarget)
	if (!shopTarget) {
		headerShop.classList.add('hide-header')
	} else {
		headerShop.classList.remove('hide-header')
	}
})

///

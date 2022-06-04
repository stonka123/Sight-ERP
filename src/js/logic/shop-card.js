import { shopItems } from '../../data/shop/shop-items.js'
import '../renders/render-shop.js'

export const LogicCard = title => {
	const buttons = document.getElementsByClassName('product__bottom-add')
	const basketIcon = document.querySelector('.test1')

	const removeCartItemButton = document.getElementsByClassName('basket__box-btn')

	for (let i = 0; i < removeCartItemButton.length; i++) {
		const button = removeCartItemButton[i]
		button.addEventListener('click', function (event) {
			const buttonClicked = event.target
			console.log('click')
			buttonClicked.parentElement.remove()
		})
	}

	function addToCartClicked(e) {
		let buttonClicked = event.target.innerText
		const title = document.getElementsByClassName('product__bottom-title')
		console.log(title)
	}
	for (let but of buttons) {
		but.addEventListener('click', e => {
			console.log('dziala?')
			var add = Number(basketIcon.getAttribute('data-count') || 0)
			basketIcon.setAttribute('data-count', add + 1)
			basketIcon.classList.add('zero')
			let buttonClicked = event.target.innerText
			const title = document.getElementsByClassName('product__bottom-title')
			console.log(e.target.title.innerText)
			// addItemtoCard()
		})
	}

	// 	function addItemtoCard(title) {
	// 		const cardBox = document.createElement('div')
	// 		cardBox.classList.add('basket__box')
	// 		const cartItems = document.querySelector('.basket')
	// 		const cartContent = `<img src="./src/img/item1.png" class="basket__box-img" alt="">
	// 		<p class="basket__box-name">Koszulka</p>
	// 		<p class="basket__box-price">39.99 <span class="basket__box-price--currency">zł</span></p>
	// 		<input type="text" class="basket__box-amount">
	// 		<button class="basket__box-btn">Usuń</button>
	// `

	// 		cardBox.innerHTML = cartContent
	// 		cartItems.append(cardBox)
	// 	}
}

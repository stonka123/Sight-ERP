import { products } from '../../data/shop/shop-items.js'
import { renderProduct } from '../renders/render-shop.js'

//////////////////// test chinola //////////////////////////////////

// ready()
// function ready() {
// 	const removeCartItemButton = document.getElementsByClassName('basket__box-btn')

// 	for (let i = 0; i < removeCartItemButton.length; i++) {
// 		const button = removeCartItemButton[i]
// 		button.addEventListener('click', removeCartItem)
// 	}

// 	const quantityInputs = document.getElementsByClassName('basket__box-amount')
// 	for (let i = 0; i < quantityInputs.length; i++) {
// 		const input = quantityInputs[i]
// 		input.addEventListener('change', quantityChanged)
// 	}

// 	const addToCartButtons = document.getElementsByClassName('product__bottom-add')
// 	for (let i = 0; i < addToCartButtons.length; i++) {
// 		const button = addToCartButtons[i]
// 		button.addEventListener('click', addToCartClicked)
// 	}
// 	const addToCartButtonss = document.getElementsByClassName('product__bottom-add')
// 	for (let i = 0; i < addToCartButtonss.length; i++) {
// 		const button = addToCartButtonss[i]
// 		button.addEventListener('click', dataCount)
// 	}
// }
// // remove
// function removeCartItem(event) {
// 	const buttonClicked = event.target
// 	const basketIcon = document.querySelector('.basket-icon')
// 	let add = Number(basketIcon.getAttribute('data-count') || 0)
// 	basketIcon.setAttribute('data-count', add - 1)
// 	buttonClicked.parentElement.remove()
// 	updateCartTotal()
// }
// // change input

// function quantityChanged(event) {
// 	const input = event.target

// 	if (isNaN(input.value) || input.value <= 0) {
// 		input.value = 1
// 	}
// 	updateCartTotal()
// }

// function checkEmptyShopCart(total) {
// 	const basketInfoEmpty = document.getElementById('basket__info')
// 	const basketInfoCostEmpty = document.getElementById('basket-cost')

// 	if (total === '0.00') {
// 		basketInfoEmpty.style.display = 'flex'
// 		basketInfoCostEmpty.style.display = 'none'
// 	} else {
// 		basketInfoEmpty.style.display = 'none'
// 		basketInfoCostEmpty.style.display = 'block'
// 	}
// }
// // count dataCount
// function dataCount() {
// 	const products = document.getElementsByClassName('products')
// 	const Addbutton = document.getElementsByClassName('product__bottom-add')
// 	const basketIcon = document.querySelector('.basket-icon')
// 	let add = Number(basketIcon.getAttribute('data-count') || 0)
// 	basketIcon.setAttribute('data-count', add + 1)
// }

// // add
// function addToCartClicked(event) {
// 	const button = event.target
// 	const shopItem = button.parentElement
// 	const imageItem = button.parentElement.parentElement
// 	const title = shopItem.getElementsByClassName('product__bottom-title')[0].innerText
// 	const price = shopItem.getElementsByClassName('product__bottom-price')[0].innerText

// 	const imageSrc = imageItem.getElementsByClassName('product__top-img')[0].src

// 	addItemtoCard(title, price, imageSrc)
// 	updateCartTotal()
// }
// function addItemtoCard(title, price, imageSrc, products) {
// 	const cartRow = document.createElement('div')
// 	cartRow.classList.add('basket__box')
// 	cartRow.setAttribute('id', products.id)

// 	const cartItems = document.getElementsByClassName('basket')[0]
// 	const cartItemNames = cartItems.getElementsByClassName('basket__box-name')

// 	for (let i = 0; i < cartItemNames.length; i++) {
// 		if (cartItemNames[i].innerText === cartItemNames[i].innerText) {
// 			console.log('lol')
// 		}

// 		const cartRowContent = `  <img src="${imageSrc}" class="basket__box-img" alt="">
//     <p class="basket__box-name">${title}</p>
// 	<p class="basket__box-price">${price} <span class="basket__box-price--currency">zł</span></p>
// 	<input class="basket__box-amount" type="number" min="1" value="1">
// 	<button class="basket__box-btn">Usuń</button>
// 	`

// 		cartRow.innerHTML = cartRowContent
// 		cartItems.append(cartRow)

// 		cartRow.getElementsByClassName('basket__box-btn')[0].addEventListener('click', removeCartItem)
// 		cartRow.getElementsByClassName('basket__box-amount')[0].addEventListener('change', quantityChanged)
// 	}
// }

// const updateCartTotal = () => {
// 	const cartItemContainer = document.getElementsByClassName('basket')[0]
// 	const cartRows = cartItemContainer.getElementsByClassName('basket__box')
// 	const basketIcon = document.querySelector('.basket-icon')
// 	let total = 0
// 	for (let i = 0; i < cartRows.length; i++) {
// 		const cartRow = cartRows[i]
// 		const priceElement = cartRow.getElementsByClassName('basket__box-price')[0]
// 		const quantityElement = cartRow.getElementsByClassName('basket__box-amount')[0]

// 		const price = parseFloat(priceElement.innerText.replace('$', ''))
// 		const quantity = quantityElement.value
// 		total = total + price * quantity
// 	}
// 	total = total.toFixed(2)
// 	document.getElementsByClassName('basket-cost--currency')[0].innerText = total + ' zł'
// 	checkEmptyShopCart(total)
// }

/////////////////////////////////////////////////////////////////////////////////////

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	const removeCartItemButton = document.getElementsByClassName('basket__box-btn')

	for (let i = 0; i < removeCartItemButton.length; i++) {
		const button = removeCartItemButton[i]
		button.addEventListener('click', removeCartItem)
	}

	const quantityInputs = document.getElementsByClassName('basket__box-amount')
	for (let i = 0; i < quantityInputs.length; i++) {
		const input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}

	const addToCartButtons = document.getElementsByClassName('product__bottom-add')
	for (let i = 0; i < addToCartButtons.length; i++) {
		const button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}
	const addToCartButtonss = document.getElementsByClassName('product__bottom-add')
	for (let i = 0; i < addToCartButtonss.length; i++) {
		const button = addToCartButtonss[i]
		button.addEventListener('click', dataCount)
	}
}
// remove
function removeCartItem(event) {
	const buttonClicked = event.target
	const basketIcon = document.querySelector('.basket-icon')
	let add = Number(basketIcon.getAttribute('data-count') || 0)
	basketIcon.setAttribute('data-count', add - 1)
	buttonClicked.parentElement.remove()
	updateCartTotal()
}
// change input

function quantityChanged(event) {
	const input = event.target

	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}

function checkEmptyShopCart(total) {
	const basketInfoEmpty = document.getElementById('basket__info')
	const basketInfoCostEmpty = document.getElementById('basket-cost')

	if (total === '0.00') {
		basketInfoEmpty.style.display = 'flex'
		basketInfoCostEmpty.style.display = 'none'
	} else {
		basketInfoEmpty.style.display = 'none'
		basketInfoCostEmpty.style.display = 'block'
	}
}
// count dataCount
function dataCount() {
	const products = document.getElementsByClassName('products')
	const Addbutton = document.getElementsByClassName('product__bottom-add')
	const basketIcon = document.querySelector('.basket-icon')
	let add = Number(basketIcon.getAttribute('data-count') || 0)
	basketIcon.setAttribute('data-count', add + 1)
}

// add
function addToCartClicked(event) {
	const button = event.target
	const shopItem = button.parentElement
	const imageItem = button.parentElement.parentElement
	const title = shopItem.getElementsByClassName('product__bottom-title')[0].innerText
	const price = shopItem.getElementsByClassName('product__bottom-price')[0].innerText
	const imageSrc = imageItem.getElementsByClassName('product__top-img')[0].src

	console.log(title, price, imageSrc)
	addItemtoCard(title, price, imageSrc)
	updateCartTotal()
}
function addItemtoCard(title, price, imageSrc) {
	const cartRow = document.createElement('div')
	cartRow.classList.add('basket__box')
	const cartItems = document.getElementsByClassName('basket')[0]
	const cartItemNames = cartItems.getElementsByClassName('basket__box-name')

	for (let i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText === title) {
			alert('alredy')
			return
		}
	}

	const cartRowContent = `  <img src="${imageSrc}" class="basket__box-img" alt="">
    <p class="basket__box-name">${title}</p>
<p class="basket__box-price">${price} <span class="basket__box-price--currency">zł</span></p>
<input class="basket__box-amount" type="number" min="1" value="1">
<button class="basket__box-btn">Usuń</button>
`
	cartRow.innerHTML = cartRowContent
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('basket__box-btn')[0].addEventListener('click', removeCartItem)
	cartRow.getElementsByClassName('basket__box-amount')[0].addEventListener('change', quantityChanged)
}

const updateCartTotal = () => {
	const cartItemContainer = document.getElementsByClassName('basket')[0]
	const cartRows = cartItemContainer.getElementsByClassName('basket__box')
	const basketIcon = document.querySelector('.basket-icon')
	let total = 0
	for (let i = 0; i < cartRows.length; i++) {
		const cartRow = cartRows[i]
		const priceElement = cartRow.getElementsByClassName('basket__box-price')[0]
		const quantityElement = cartRow.getElementsByClassName('basket__box-amount')[0]

		const price = parseFloat(priceElement.innerText.replace('$', ''))
		const quantity = quantityElement.value
		total = total + price * quantity
	}
	total = total.toFixed(2)
	document.getElementsByClassName('basket-cost--currency')[0].innerText = total + ' zł'
	checkEmptyShopCart(total)
}

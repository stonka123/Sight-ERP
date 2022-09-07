import { products } from '../../data/shop/shop-items.js'
import '../logic/shop-card.js'
import '../modules/settings.js'

const myConetnt = document.querySelector('.shop__container')

export function renderProduct() {
	products.forEach(product => {
		myConetnt.innerHTML += ` <div class="product">
        <div class="product__top">
        <img src="${product.img}" alt="" class="product__top-img">
        </div>
        <div class="product__bottom">
        <p class="product__bottom-title">${product.title}</p>
        <p class="product__bottom-price">${product.price} <span
        class="product__bottom-price-currency">zł</span></p>
        <button class="product__bottom-add" >Dodaj do koszyka</button>
        </div>
        </div>
        `
	})
}
// export function renderProductClear() {
// 	products.forEach(product => {
// 		myConetnt.innerHTML = ''
// 	})
// }
// export function renderProductEuro() {
// 	products.forEach(product => {
// 		myConetnt.innerHTML += ` <div class="product">
//         <div class="product__top">
//         <img src="${product.img}" alt="" class="product__top-img">
//         </div>
//         <div class="product__bottom">
//         <p class="product__bottom-title">${product.title}</p>
//         <p class="product__bottom-price">${product.priceEuro} <span
//         class="product__bottom-price-currency">zł</span></p>
//         <button class="product__bottom-add" >Dodaj do koszyka</button>
//         </div>
//         </div>
//         `
// 	})
// }
// window.addEventListener('change', () => {
// 	const currencyValue = document.querySelector('input[name="currency"]:checked').value
// 	if (currencyValue === 'pln') {
// 		renderProductClear()
// 		renderProduct()
// 	} else if (currencyValue === 'euro') {
// 		renderProductClear()
// 		renderProductEuro()
// 	}
// })
renderProduct()

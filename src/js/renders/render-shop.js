import { shopItems } from '../../data/shop/shop-items.js'

const myConetnt = document.querySelector('.shop__container')

window.addEventListener('DOMContentLoaded', function () {
	const showInHtml = shopItems
		.map((item, index) => {
			return `
        <div class="product">
                     <div class="product__top">
                                    <img src="${item.img}" alt="" class="product__top-img">
                                </div>
                                <div class="product__bottom">
                                    <p class="product__bottom-title">${item.title}</p>
                                    <p class="product__bottom-price">${item.price} <span
                                            class="product__bottom-price-currency">zł</span></p>
                                    <button class="product__bottom-add">Dodaj do koszyka</button>
                                </div>
                            </div>
        
        `
		})
		.join('')
	myConetnt.innerHTML = showInHtml
})

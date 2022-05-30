import { data } from '../../data/data.js'
import './shop.js'

const panelTop = document.querySelector('.panel-box')
const panelBurgerBtn = document.querySelector('.panel-burger')
const notificationsIcon = document.querySelector('.panel-box__item-notifications')
const basketIcon = document.querySelector('.panel-box__item-basket')
const notifications = document.querySelector('.notifications')
const basket = document.querySelector('.basket')
const popupQuerySelector = '#popup'
const popupEl = document.querySelector(popupQuerySelector)

let loginAvatar
let PanelTopItem

export const showPanelIconMobile = () => {
	panelTop.classList.toggle('panel-mobile-show')
	panelBurgerBtn.classList.toggle('change')
}

export const showAvatar = avatar => {
	PanelTopItem = document.createElement('div')
	PanelTopItem.classList.add('panel-box__item')

	loginAvatar = document.createElement('img')
	loginAvatar.classList.add('panel-box__item-avatar')
	loginAvatar.setAttribute('src', `${avatar}`)

	panelTop.appendChild(PanelTopItem)
	PanelTopItem.appendChild(loginAvatar)
}

document.querySelector('.dashboard').addEventListener('click', e => {
	const notiTarget = e.target
	const notifications = document.querySelector('.notifications')
	const closestNoti = e.target.closest('.panel-box__item-notifications')
	const closestBasket = e.target.closest('.panel-box__item-basket')
	const targetPopup = e.target.closest('.notifications')
	const targetBasket = e.target.closest('.basket')

	if (closestNoti) {
		notifications.classList.toggle('notifications-show')
		alert()
	} else if (targetPopup) {
		notifications.classList.add('notifications-show')
		alert()
	} else if (!closestNoti) {
		notifications.classList.remove('notifications-show')
		clear()
	}

	function alert() {
		notificationsIcon.classList.add('alert')
	}
	function clear() {
		notificationsIcon.classList.remove('alert')
	}
})

panelBurgerBtn.addEventListener('click', showPanelIconMobile)

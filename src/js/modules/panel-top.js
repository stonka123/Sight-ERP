import { data } from '../../data/data.js'
import './shop.js'

const panelTop = document.querySelector('.panel-box')
const panelBurgerBtn = document.querySelector('.panel-burger')
const notificationsIcon = document.querySelector('.panel-box__item-notifications')
const notifications = document.querySelector('.notifications')
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
	const closestNoti = e.target.closest('.panel-box__item-notifications')
	const targetPopup = e.target.closest('.notifications')

	if (closestNoti) {
		notifications.classList.toggle('notifications-show')
	} else if (targetPopup) {
		notifications.classList.add('notifications-show')
	} else if (!closestNoti) {
		notifications.classList.remove('notifications-show')
	}
})

panelBurgerBtn.addEventListener('click', showPanelIconMobile)

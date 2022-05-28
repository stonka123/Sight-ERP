import { data } from '../../data/data.js'
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
	const closestNoti = e.target.closest('.notifications')

	console.log(notiTarget)

	if (!notiTarget.classList.contains('notifications', 'panel-box__item-notifications ')) {
		clear()
	}
	setActive(notiTarget, e)

	function clear(notiTarget) {
		notifications.classList.remove('notifications-show')
	}

	function setActive(notiTarget, e) {
		if (notiTarget.classList.contains('panel-box__item-notifications')) {
			notifications.classList.add('notifications-show')
		}
	}
})
panelBurgerBtn.addEventListener('click', showPanelIconMobile)

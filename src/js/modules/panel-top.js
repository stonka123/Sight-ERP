// import { data } from '../../data/data.js'
import '../logic/shop-card.js'

const panelTop = document.querySelector('.panel-box')
const panelBurgerBtn = document.querySelector('.panel-burger')
const notificationsIcon = document.querySelector('.panel-box__item-notifications')
const basketIcon = document.querySelector('.panel-box__item-basket')
const notifications = document.querySelector('.notifications')
const basket = document.querySelector('.basket')
const popupQuerySelector = '#popup'
const popupEl = document.querySelector(popupQuerySelector)
const mainPanel = document.querySelector('.panel')
const panelLogin = document.querySelector('.panel-login')
let loginAvatar
let PanelTopItem

export const showPanelIconMobile = () => {
	panelTop.classList.toggle('panel-mobile-show')
	panelBurgerBtn.classList.toggle('change')
	panelLogin.classList.toggle('showNamePanelTop')
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
	const basketBoxBtnDelete = e.target.closest('.basket__box-btn')

	if (closestNoti) {
		notifications.classList.toggle('notifications-show')
		notificationsIcon.classList.toggle('alert')
	} else if (targetPopup) {
		notifications.classList.add('notifications-show')
	} else if (!closestNoti) {
		notifications.classList.remove('notifications-show')
		notificationsIcon.classList.remove('alert')
	}

	if (closestBasket) {
		basket.classList.toggle('notifications-show')
		basketIcon.classList.toggle('alert')
	} else if (targetBasket) {
		basket.classList.add('notifications-show')
	} else if (!closestBasket && !basketBoxBtnDelete) {
		basket.classList.remove('notifications-show')
		basketIcon.classList.remove('alert')
	}
})

export const showProfileName = (surname, name) => {
	const nameProfile = document.createElement('span')
	nameProfile.classList.add('panel-login--name')
	nameProfile.innerHTML = `${name} ${surname}`
	panelLogin.append(nameProfile)
}




panelBurgerBtn.addEventListener('click', showPanelIconMobile)

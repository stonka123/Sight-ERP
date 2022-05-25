import { data } from '../../data/data.js'
import { veryficationLogaut } from '../login-page/validateLogin.js'
const panelTop = document.querySelector('.panel-box')

const panelBurgerBtn = document.querySelector('.panel-burger')

// let loginAvatar
// let PanelTopItem
export const showPanelIconMobile = () => {
	panelTop.classList.toggle('panel-mobile-show')
	panelBurgerBtn.classList.toggle('change')
}

// const showAvatar = () => {
// 	const avatars = data.find(ava => ava.avatar)

// 	PanelTopItem = document.createElement('div')
// 	PanelTopItem.classList.add('panel-box__item')

// 	loginAvatar = document.createElement('img')
// 	loginAvatar.classList.add('panel-box__item-avatar')
// 	loginAvatar.setAttribute('src', `${avatars.avatar}`)

// 	panelTop.appendChild(PanelTopItem)
// 	PanelTopItem.appendChild(loginAvatar)
// }
// showAvatar()

panelBurgerBtn.addEventListener('click', showPanelIconMobile)

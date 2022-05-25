import { data } from '../../data/data.js'
const sectionLogin = document.querySelector('.login')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
const btnLogin = document.querySelector('.login-container__bottom-btn')
const errorParagraph = document.querySelector('.login-container__bottom-input--error')

export const veryficationLogaut = () => {
	const checkAuth = data.some(el => {
		if (el.loginPass === login.value && el.passwordPass === password.value) {
			errorParagraph.classList.remove('show-error')
			document.getElementsByClassName('login')[0].style.display = 'none'
			document.getElementsByClassName('dashboard')[0].style.display = 'flex'
			enterLogin()
			console.log(el.loginPass)
			console.log(el.avatar)
			showAvatar()
		} else {
			errorParagraph.classList.add('show-error')
		}
	})
}
const panelTop = document.querySelector('.panel-box')
let loginAvatar
let PanelTopItem
const showAvatar = () => {
	const avatars = data.find(ava => ava.avatar)

	PanelTopItem = document.createElement('div')
	PanelTopItem.classList.add('panel-box__item')

	loginAvatar = document.createElement('img')
	loginAvatar.classList.add('panel-box__item-avatar')
	loginAvatar.setAttribute('src', `${avatars.avatar}`)

	panelTop.appendChild(PanelTopItem)
	PanelTopItem.appendChild(loginAvatar)
}
// showAvatar()

const enterLogin = () => {
	if (event.keyCode === 13 && window.getComputedStyle(sectionLogin).display === 'flex') {
		veryficationLogaut()
	}
}
window.addEventListener('keyup', enterLogin)
btnLogin.addEventListener('click', veryficationLogaut)

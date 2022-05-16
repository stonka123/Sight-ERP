import { data } from '../../data/data.js'

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
		} else {
			errorParagraph.classList.add('show-error')
		}
	})
}

btnLogin.addEventListener('click', veryficationLogaut)

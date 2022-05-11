import { data } from '../../data/data.js'

const login = document.querySelector('#login')
const password = document.querySelector('#password')
const btnLogin = document.querySelector('.login-container__bottom-btn')
const errorParagraph = document.querySelector('.login-container__bottom-input--error')

export const veryficationLogaut = () => {
	if (login.value === data.login && password.value === data.password) {
		errorParagraph.classList.remove('show-error')
		window.location.href = 'main-page.html'
	} else if (login.value != data.login || password.value != data.password) {
		errorParagraph.classList.add('show-error')
	}
}

btnLogin.addEventListener('click', veryficationLogaut)

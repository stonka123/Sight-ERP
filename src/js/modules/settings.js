const settingsBtn = document.querySelector('.panel-box__item-settings')
const settingsPanel = document.querySelector('.settings')
const BtnClosePanel = document.querySelector('.settings__btn-close')

const showSettingPanel = () => {
	settingsPanel.classList.toggle('block')
	activeIconColor()
}
const closeSettingsPanel = () => {
	settingsPanel.classList.remove('block')
	activeIconColor()
}

const activeIconColor = () => {
	if (settingsPanel.classList.contains('block')) {
		settingsBtn.style.color = '#7e49f8'
	} else {
		settingsBtn.style.color = '#949494'
	}
}

settingsBtn.addEventListener('click', showSettingPanel)
BtnClosePanel.addEventListener('click', closeSettingsPanel)

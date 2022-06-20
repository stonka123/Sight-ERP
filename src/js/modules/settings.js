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

document.querySelector('.dashboard').addEventListener('click', e => {
	const target = e.target
	const iconTarget = e.target.closest('.settings')
	const setBtn = e.target.closest('.panel-box__item-settings')

	if (!iconTarget && !setBtn) {
		closeSettingsPanel()
		console.log('close')
	}
})

settingsBtn.addEventListener('click', showSettingPanel)
BtnClosePanel.addEventListener('click', closeSettingsPanel)

const panelTop = document.querySelector('.panel-box')
const panelBurgerBtn = document.querySelector('.panel-burger')

export const showPanelIconMobile = () => {
	panelTop.classList.toggle('panel-mobile-show')
	panelBurgerBtn.classList.toggle('change')
}

panelBurgerBtn.addEventListener('click', showPanelIconMobile)

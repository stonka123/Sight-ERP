const startOrdersBtn = document.querySelector('.orders-container__start')
const panelOrders = document.querySelector('.orders-container__panel')

// PANEL
const addOrders = document.querySelector('.orders-container__panel-bottom-add')
const closePanel = document.querySelector('.orders-container__panel-bottom-close')

const showPanelOrders = () => {
	panelOrders.style.display = 'flex'
}
const closePanelOrders = () => {
	panelOrders.style.display = 'none'
}

startOrdersBtn.addEventListener('click', showPanelOrders)
closePanel.addEventListener('click', closePanelOrders)

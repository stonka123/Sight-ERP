const openPanelBtn = document.querySelector('.social-panel__addbtn')
const panelControl = document.querySelector('.social-controler')
const socialContainer = document.querySelector('.social-container')
const error = document.querySelector('.social-controler-error')
const likeIcon = document.querySelectorAll('.social-container__card-icon')

// panel
const closePanelBtn = document.querySelector('.social-controler-btns__close')
const addPanelBtn = document.querySelector('.social-controler-btns__add')
const textArea = document.querySelector('.social-controler-text')
const inputPhoto = document.querySelector('.social-controler-input')

// show Panel Control
const showPanelControl = () => {
	panelControl.style.display = 'flex'
}

// Close panel

const closePanelControl = () => {
	panelControl.style.display = 'none'
	textArea.value = ''
	inputPhoto.value = ''
	error.style.visibility = 'hidden'
}

const addPost = () => {
	if (textArea.value !== '') {
		const newPost = document.createElement('div')
		newPost.classList.add('social-container__card')
		newPost.innerHTML = ` <img src="${inputPhoto.value}" alt="" class="social-container__card-img">
    <div class="social-container__card-icon"><i class="fa-regular fa-heart"></i></div>
    <p class="social-container__card-title">${textArea.value}</p>`
		socialContainer.append(newPost)
		closePanelControl()
	} else {
		error.style.visibility = 'visible'
	}
}

openPanelBtn.addEventListener('click', showPanelControl)
closePanelBtn.addEventListener('click', closePanelControl)
addPanelBtn.addEventListener('click', addPost)
likeIcon.forEach(el => {
	el.addEventListener('click', () => {
		localStorage.setItem('like', 'true')
		el.classList.toggle('color-red')
		el.classList.toggle('shake-lr')
	})
})

//create element 

const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
newNavButton.style.color = 'black'


const newNavButton2 = document.createElement('a')
newNavButton2.className = 'main-navigation__button-item'
newNavButton2.href = '#tasks_expired2'
newNavButton.dataset.buttonId = '5'
newNavButton2.textContent = 'Просроченные Задачи 2'
newNavButton2.style.color = 'brown'




//append, prepend, insertAdjacentElement


const mainNavigation = document.querySelector('.main-navigation__button-item')

mainNavigation.insertAdjacentElement('beforebegin',newNavButton)
mainNavigation.insertAdjacentElement('afterbegin',newNavButton2)


//closest

const taskItemText = document.querySelector('.task-item__text')
console.log(taskItemText)

const taskItem = taskItemText.closest('.task-item')
console.log(taskItem)

//classlist: add,remove,toggle


const firstNaviButton = document.querySelector('.main-navigation__button-item')

firstNaviButton.classList.add('main-navigation__button-item_selected')
firstNaviButton.classList.remove('main-navigation__button-item_selected')
firstNaviButton.classList.toggle('main-navigation__button-item_selected')

const createTaskBlock = document.querySelector('.create-task-block__input')
console.log(createTaskBlock)

console.log(createTaskBlock.hasAttribute('type'))
console.log(createTaskBlock.getAttribute('value'))
createTaskBlock.removeAttribute('placeholder')
createTaskBlock.setAttribute('placeholder','Создать новую задачу')
const tasksWrapper = document.querySelector('.tasks__wrapper')

console.log(tasksWrapper.className)

tasksWrapper.className = 'tasks__wrapper_1' 
console.log(tasksWrapper.className)

const tasksBlock = document.querySelector('#tasks')
console.log(tasksBlock.id)

const submitButton = document.querySelector('.create-task-block__button')
console.log(submitButton.textContent)

submitButton.textContent = 'Создать новую задачу'

//innerHTML

console.log(tasksBlock.innerHTML)

// tasksBlock.innerHTML = '<b>tasksblock</b>'


//children

const createTasksForm = document.querySelector('.create-task-block')
console.log(createTasksForm.children)

//data-attributes

const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log(firstNavButton.dataset.buttonId)
firstNavButton.dataset.buttonId = 10


//style

console.log(firstNavButton.style)
firstNavButton.style.fontWeight = 'bold'
firstNavButton.style.boxShadow = 'inset 0 0 0 4px white'
firstNavButton.style.borderBox = 'bold 3'


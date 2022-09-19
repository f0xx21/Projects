const tasksWrapper = document.querySelector('.tasks__wrapper')
console.log(tasksWrapper.className)

tasksWrapper.className = 'tasks__wrapper1'
console.log(tasksWrapper.className)

const tasksBlock = document.querySelector('#tasks')
console.log(tasksBlock.id)

const submitButton = document.querySelector('.create-task-block__button')
console.log(submitButton.innerText)
console.log(submitButton.textContent)

submitButton.innerHTML = '<b>создать новую задачу</b>'

//innerHtml

console.log(tasksBlock.innerHTML)
// tasksBlock.innerHTML = '<b>tasksBlock</b>'

// children 
const createTaskForm = document.querySelector('.create-task-block')
console.log(createTaskForm.children)

//data-attributes

const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log(firstNavButton.dataset.buttonId)
firstNavButton.dataset.buttonId = '10'

// style

console.log(firstNavButton.style)
firstNavButton.style.fontWeight = 'bold'
firstNavButton.style.boxShadow = 'inset 0 0 0 3px white'

const tasks = [
    {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
    },
    {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
    },
    {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
    },
  ]



const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.dataset.taskId = taskId

console.log(taskItem)
//container
const taskItemMainContainer = document.createElement('div')
taskItemMainContainer.className = 'task-item__main-container'

//content
const taskItemMainContent = document.createElement('div')
taskItemMainContent.className = 'task-item__main-content'


taskItem.append(taskItemMainContainer)
taskItemMainContainer.append(taskItemMainContent)

//form
const checkBoxForm = document.createElement('form')
checkBoxForm.className = 'checkbox-form'
//input
const inputCheckbox = document.createElement('input')
inputCheckbox.type = 'checkbox'
inputCheckbox.className = 'checkbox-form__checkbox'
const inputId = `task-${taskId}`
inputCheckbox.id = inputId
//label
const labelCheckbox = document.createElement('label')
labelCheckbox.htmlFor = inputId
//span
const taskItemText = document.createElement('span')
taskItemText.className = 'task-item__text'
taskItemText.innerText = taskText
//button
const deleteButton = document.createElement('button')
deleteButton.className = 'task-item__delete-button default-button delete-button'
deleteButton.innerText = 'Delete'

taskItemMainContent.append(checkBoxForm, taskItemText)
checkBoxForm.append(inputCheckbox, labelCheckbox)
taskItemMainContainer.append(deleteButton)

return taskItem
}


const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('submit', event => {
  event.preventDefault()


  const newTaskText = event.target.taskName.value || ''
  if (newTaskText) {
    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
    }
    tasks.push(newTask)
    const taskItem = createTaskItem(newTask.id, newTask.text)
    tasksListContainer.append(taskItem)
}

})
const tasksListContainer = document.querySelector('.tasks-list')
  tasks.forEach(task => {
    const taskItem = createTaskItem(task.id, task.text)
    tasksListContainer.append(taskItem)
  })
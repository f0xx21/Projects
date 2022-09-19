

const tasksBlock = document.getElementById('tasks')
console.log(tasksBlock)

const allNavButtons = document.getElementsByClassName('main-navigation__button-item')
console.log(allNavButtons)


const allButtons = document.getElementsByTagName('button')
console.log(allButtons)


//querySelector


const tasksBlock2 = document.querySelector('#tasks')
console.log(tasksBlock2)
const mainNavi = document.querySelector('.main-navigation')
console.log(mainNavi)

const firstButton = document.querySelector('button')
console.log(firstButton)

const thirdB = document.querySelector('[data-button-id="3"]')
console.log(thirdB)

//querySelectorAll

const allNavi = document.querySelectorAll('.main-navigation__button-item')

console.log(allNavi)

allNavi.forEach((button) =>{
    console.log(button)
})

const createTaskBlock = document.querySelector('.create-tast-block')

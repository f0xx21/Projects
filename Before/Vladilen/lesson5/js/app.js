const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['white','red','black','green']
let time = 0
let score = 0
startBtn.addEventListener('click', (event) => {

    event.preventDefault()
    screens[0].classList.add('up')
}) 

timeList.addEventListener('click', event => {
    if (event.target.classList.contains ('time-btn')) {
        time = parseInt(event.target.getAttribute ('data-time'))
        startGame()
        screens[1].classList.add('up')
    }
})

board.addEventListener('click', event => {

    if (event.target.classList.contains ('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame(){
    createRandomCircle()
    setInterval(decreaseTime, 1000)  
    setTime(time)

}
function decreaseTime(){
if (time === 0){
finishGame()
} else {
    let current = --time
    if (current < 10){
        current = `0${current}`
    }
    setTime(current)
    }
}
    


function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    board.innerHTML = `<h1> Азаз Ваш счет:<span class="primary"> ${score}`
    timeEl.parentNode.classList.add('hide')

}

function createRandomCircle(){

    const circle = document.createElement('div')
    const size = getRandomNubmer(11, 55)
    const {width,height} = board.getBoundingClientRect()
    const x = getRandomNubmer(0, width - size)
    const y = getRandomNubmer(0, height - size)
    const color = getRandomColor()

    circle.style.background = `${color}`
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNubmer(min,max){
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



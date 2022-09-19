
// allBody - ?
const allBody = document.querySelector('body')
console.log(allBody)

// container

const container = document.querySelector('.container')
console.log(container)

//button 1 white background
const button1 = document.querySelector('button')
console.log(button1)


//button 2 text +
const button2 = document.querySelector('.button2')
console.log(button2)

//button 2.1 text -

const button2_1 = document.querySelector('.button2_1')
console.log(button2_1)

// input 3 
const input1 = document.querySelector('input')
console.log(input1)

// button 4
const button4 = document.querySelector('.button4')
console.log(button4)

// button 5
const button5 = document.querySelector('.button5')
console.log(button5)

//ul1 item 6
const ul1 = document.querySelector('.ul1')
console.log(ul1)

let fontSize = 20
let blockNumber = 0




//createNew function

const createNewText = () =>{
     
   const newText = input1.value
   input1.value = ''
   ul1.textContent = newText 
 
    
}

const largeText = () => {
    fontSize++
ul1.style.fontSize = fontSize + "px"
    console.log('large')
}

const smallText = () => {
    fontSize--
    ul1.style.fontSize = fontSize + "px"
    console.log('smaller')
}

const switchColor = () =>{
    allBody.classList.toggle('blue')
    container.classList.toggle('white_text')
}




const newElement = () => {
    
    createBlock = document.createElement('div')
    createBlock.className = 'page-block'
    createBlock.innerText = input1.value + blockNumber;
  blockNumber++;
  button5.insertAdjacentElement('beforebegin', createBlock);
}

//listeners

button1.addEventListener('click',switchColor)
button2.addEventListener('click',largeText)
button2_1.addEventListener('click',smallText)
button4.addEventListener('click',createNewText)
button5.addEventListener('click',newElement )



//function to show

function show(){
   
 
}











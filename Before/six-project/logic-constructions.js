//if
//if else
//swich case
// ?:

const ifFrontEndDeveloper = true

if(ifFrontEndDeveloper){
    console.log('Вы фронтенд разработчик, добро пожаловать в команду')
}else{
    console.log('Вы не фронтенд разработчик')
}


const closingTime = 9
const currentTime = 6

// if(currentTime > closingTime){
//     console.log('Shop is open')
// }else{
//     console.log('Shop is closed')
// }

const isFrontDeveloper = 'Front-End'

// if (isFrontDeveloper === 'Front-End'){
//     console.log('2000$')
// }else if (isFrontDeveloper === 'Back-End'){
// console.log('1500$')
// }else if (isFrontDeveloper === 'Full-Stack') {
//     console.log('3500$')
// }else{
//     console.log('зарплата не определена')
// }

 
//switch case

let isPhotographer = 'Sergei'

switch(isPhotographer){
    case 'Ruslan':
        console.log('yes')
    break    
    case 'Sergei':
        console.log('No')
    break    
    case 'Artur':
        console.log('Samurai')
    break    
    default:
    console.log('Уходи')   
}
  
const favoriteDrink = 'Кофе'
  
// const message = favoriteDrink === 'Кофе' 
// ? 'Ваш любимый напиток - кофе ' 
// : 'Вы скорее всего любите чай'
// // console.log(message)   

const number = 1

const message = number === 2
? 'Это цифра 1'
: 'Это не цифра 1'
console.log(message)
//alert(1)

//variable
//var firstName = "Artem" // string
//const lastName = 'Kolgan' //string
// isProgrammer = true //boolean
// age = 31 //number

//const _private = 'private'
//const $ = 'some value'

//const withNum5 = '5' //
// const 5withNum = 5 не начинать с числа название переменных

//console.log(firstName + lastName)

// 2 мутирование
//console.log ('Имя человека: ' + firstName + ', а возраст человека '+ age )
//alert('Имя человека: ' + firstName + ', а возраст человека '+ age)
//const lastName = prompt('введите фамилию')
//alert (firstName + ' ' +  lastName)

// 3 операторы
//const a = 1000
//const b = 2000
//let currentYear = 2021
//let c = 32

//c = c + a

//console.log(a)
//const lox = a - b
//console.log(a + b)
//console.log(a - b)
//console.log(a / b)
//console.log(a * b)
//console.log(currentYear++)
//console.log(lox)

//4 типы данных

// const isProgrammer = true
// const name = 'fox'
// const age = 31
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(age)
// console.log(typeof x)

//5 приоритет операторов

// const fullAge = 31
// const birthYear = 1989
// const currentyear = 2021
//
// const isFullAge = (currentyear - birthYear) >= fullAge
// console.log(isFullAge)


//6 условные операторы

// const courseStatus = 'fail' //ready. fail. pending
// if (courseStatus === 'ready'){
//     console.log('Курс уже готов')
//     }
// else if (courseStatus === 'pending') {
//     console.log('Не готов, в процессе разработки')
// } else {
//     console.log('Не пошло')
// }

// const isReady = true
// // if(isReady === true) {
// //     console.log('all ready')
// //     }else{
// //     console.log('all is not ready')
// // }
//
// //тернарное выражение
// isReady ? console.log('all ready') : console.log('all is not ready')
//
//
//
// const num1 = 42 //number
// const num2 = '42' //string
// console.log(num1 == num2)

//7 Булева логика

//8 функции
// function calculateAge (year){
//     return 2020 - year
// }
//
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Имя человека ' + name + ' возраст ' + age)
//     } else {
//         console.log("this is future")
//     }
// }
//
//
// logInfoAbout('Oleg',1989)
// logInfoAbout('Vladimir',1995)
// logInfoAbout('Sergei',2023)


//9 массивы
//const cars = ['kia', 'mercedes', 'ford']
//const cars = new Array ('kia', 'mercedes', 'ford')
// console.log(length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])
// cars[0] = 'bmw'
// cars[1] = 'vaz'
// console.log(cars)

//10 Циклы
// const cars = ['kia', 'mercedes', 'ford','lox']
// // for(let i = 0; i < cars.length;i++){
// //     const car = cars[i]
// //     console.log(car)
//
//     for(let car of cars){
//         console.log(car)
//     }

//11 Объекты
// const person = {firstName: 'artem',lastName: 'ko',year: 1989,languages: 'ru'}
// console.log(person)
// const key = 'year'
// console.log(person[key])

const text = 'мой любимый язык программирования JavaScript'
console.log(text.indexOf('я'))

programingLanguage = 'JavaScript'
console.log(programingLanguage.slice(1,6))
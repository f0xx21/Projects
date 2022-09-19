// let a = 10
// let b = 10

// let counter = 0

// let fun1 = function(a,b){
//     let c
//     c = a + b
//     sum = a + b
//     counter += 1
//     console.log(c)

// } 
// fun1(a,b)
// fun1(a,b)
// console.log(counter)

// let massive = [1,2,3,4]

// for(let i = 0; i < massive.length; i +=1){
//     console.log(i)
// }

// const number = 0

// number
// ? console.log('condition true')
// : console.log('condition false')


// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -5
// const res = value >= 0 ? value : -value
// console.log(res)

// const myObj = {
//     name:'Igor',
//     age:22
// }

// for (const key in myObj){
//     console.log(key,myObj[key])
// }

// const myObj2 = {
//     ...myObj

// }

// for (const key in myObj2){
//     console.log(key,myObj2[key])
// }


// // let а
// // let b
// // let sum

// let fn1 = (a,b) =>{
//     sum = a + b
//     console.log(sum)
// }

// fn1(55,22)


// // let name = prompt('Enter your name')
// // let age = 27
// // let acess = confirm('Yes?')

// // if (name === 'Vika' && age === 27 && acess === true){
// //     console.log('Hello Vika')
// // }else{
// //     console.log('User is not recognized, Get out')
// // }

// const massive2 = ['1',2,true]


// for(let i = 0; i < massive2.length; i += 1){
    
//     console.log(i)
   
// }





// let checkQuestionAnswer = (question,correctAnswer) => {
//     let userAnswer = prompt(question)
//     userAnswer = userAnswer.trim().toLowerCase()
    
//     if (correctAnswer.toLowerCase() === userAnswer){
//      alert('Ответ верный')
//  }else{
//      alert('Не верно')
//  }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')

// let showSucessMessage = (message) =>{
// console.log(message)
// }

// showSucessMessage('yahai')

// let showErrorMessage = (message) => {
//     console.error(message)
// }

// showErrorMessage('yahahai')

// let checkTextOnErrorSymbol = (text,errorSybmol,sucessCallback,errorCallback)=>{
// let countErrors = 0
// for (let i = 0; i < text.length; i += 1){
//     const currentSymbol = text[i]
//     if (currentSymbol === errorSybmol && errorCallback){
//         errorCallback(`Найден запрещенный символ ${errorSybmol
//         } под индексом ${i}`)
//         countErrors += 1
//     }
// }
// if (sucessCallback && countErrors === 0){
//     sucessCallback(`В данном тексте нет запрещенных символов`)
// }
// }
// const text = `hello! как дела? Вы lox!`
// checkTextOnErrorSymbol(text,'а',showSucessMessage,showSucessMessage)





// let massive = [1,2,3,4]

// for( let i = 0; i < massive.length; i+= 1){
//     console.log(massive[i])
// }

// massive.forEach((number,index)=>{
//     console.log(`number`,number,`index`,index)
// })

// let i = 0 

// while (i < 4){
//     console.log(i)
//     i++
// }


// let k = 0
// while (k < 10){
//     console.log(k)
//     k++
// }


// let massive3 = ['da','net',true,2]

// massive3.forEach((number,array)=>{
//     console.log(`number`,number,`array`,array)
// })

// for (let person of massive3){
//     console.log(person)
// }

// let massive4 = [
//     {name:'alexei', age: 30, balance: 30000},
//     {name:'lena', age: 32, balance: 40000},
//     {name:'rusik', age: 28, balance: 50000},
//     {name:'bogdan', age: 28, balance: 1000},
// ]

// massive4.forEach(person => console.log(person))

// let j = 0


// // do{
// //     j++
// // }
// // while (j < 5){
// //      console.log(j)
     
// // }

// const myObj = {
//     name:'Pavel',
//     age:30,
//     gender:true
// }


// for (key in myObj){
//     console.log(key,myObj[key])
// }

// let newMassive = Object.keys(myObj)

// console.log(newMassive)

// const myObj2 = {
//     x: 1,
//     y: true,
//     z:'text'
// }

// for (key in myObj2){
//     console.log(key,myObj2[key])
// }

// let newMassive2 = Object.keys(myObj).forEach(value =>{
//     console.log(value)
// })

// const myObj3 = {
//     e:'text',
//     t: 11,
//     y: false
// }

// let newMassive3 = Object.keys(myObj3)
// console.log(myObj3)

// const myObj4 ={
//     ...myObj3,
//     ...myObj2
// }
// console.log(myObj4)

// const myArray = [true,10,'abc,null']


// for(const letter of myArray){
//     console.log(letter)
// }

// for (const key in myArray){
//     console.log(myArray[key])
// }

// const string1 = 'hello'

// for (const letter of string1){
//     console.log(letter)
// }

let massive6 = [
       {name:'Alexei', age: 30, balance: 30000},
       {name:'Lena', age: 17, balance: 40000},
       {name:'Rusik', age: 28, balance: 50000},
       {name:'Bogdan', age: 28, balance: 1000},
       {name:'Misha', age: 16, balance: 500}
]







// let yahai = massive6.forEach((name,index) => {
//     console.log(name)
//     console.log(`index`,index)
// })

// const yahai2 = massive6.map(age => {
// return massive6.age
// })


// console.log(yahai)
// console.log(yahai2)


// let newMassive = massive6
// .filter(massive6 => massive6.balance > 3000)
// .map(massive6 =>{
//     return{
//         info:`${massive6.name} (${massive6.age})`
//     }
// })    

// console.log(newMassive)

// const bogart = massive6.find(massive6 => massive6.name === 'Bogdan')

// const bogartIndex = massive6.findIndex(massive6 =>  massive6.name)

// console.log(bogart)
// console.log(bogartIndex)


// const adults = massive6.filter(massive6 => massive6.age >= 18)
// const nameFilter = massive6.filter(massive6=> massive6.name === 'Bogdan' )
// const balanceFilter = massive6.filter(massive6 => massive6.balance < 10000)

// console.log(balanceFilter)
// console.log(adults)
// console.log(nameFilter)

// let amount = 0
// for (let i = 0; i < massive6.length; i++){
//     amount += massive6[i].balance
// }


// const amount = massive6.reduce((total,person)=>{
// return total + person.balance

// },0)

// console.log(amount)

// massive6.forEach(function(person,name,array){
//     console.log(person)
//     console.log(name)
// })

// const newPeople = massive6.map(person =>{
// return `${person.name} (${person.age})`
// })

// console.log(newPeople)

// const adults = []
// for (let i = 0; i< massive6.length; i++){
//     if (massive6[i].age >= 18){
//         adults.push(massive6[i])
//     } 
// }
// console.log(adults)
// // console.log(5 > 2)
// // console.log(10 < 5)
// // console.log(5 <= 5)
// // console.log(5 == 5)

// let fn1 = (a,b) =>{
// let c = a + b
// return c
// }
// let sum = fn1(5,5)
// console.log(sum)

// // console.log('1' == 1)
// // console.log('200' > '21')
// // console.log(true == 1)

// // console.log('1' === 1)

// // const isFrontend = true

// // if(isFrontend){
// //     console.log(`harosh`)
// // }else{
// //     console.log(`pestik`)
// // }

// const name1 = 'Kirill'

// // if(name1 === 'Kirill'){
// //     console.log('Eto Kirill, salary = 3000 $') 
// // }else if(name1 === 'Pestik'){
// //     console.log('Eto pestik, kupi nac')
// // }

// // switch(name1){
// //     case 'Kirill':
// // console.log('Kirill')
// //     break
// //     case 'Pestik':
// // console.log('Cep')
// //     break
// //     case 'Armen':
// // console.log('eto ara')
// //     default:
// // console.log('ne opredelena')           
// // }


// // const closing1 = 20
// // const currentTime = 10

// // if(closing1 > currentTime){
// //     console.log('open')
// // }else{
// //     console.log('closed')
// // }


// // const develop = 'full-stack'

// // switch(develop){
// //     case 'front-end':
// //     console.log('$3000')
// //     break
// //     case 'back-end':
// //     console.log('$4000')
// //     break
// //     case 'full-stack':
// //     console.log('$5000')
// //     default:
// //     console.log('Salary is not defined')               
// // }


// // const favoriteDrink = 'tea'
// // if(favoriteDrink === 'cofee'){
// //     message = 'our favorite drink is coffee'
// // } if (favoriteDrink === 'tea'){
// //     message = 'our favorite drink is tea'
// // }
// // console.log(message)

// const photographer = 'Rusik'

// const message2 = photographer === 'Rusik'
// ? 'This is Ruslan' // true
// : 'This is not Ruslan'; // false

// console.log(message2)


// // const number1 = Number(prompt('Enter number'))


// // const count1 = number1 === 100
// // ? 'one hungred'
// // : 'number not defined';

// // console.log(count1)


// // const string1 = prompt('Enter your favorite name')

// // const count2 = string1 === 'Rusik'
// // ? 'this is ruslan'
// // : 'go out';
// // console.log(count2)

// // const name2 = prompt('Enter name')

// // switch(name2){
// // case 'Vika':
// //  console.log('This is Vika')
// //     break
// // case 'Vitaliy':
// //  console.log('This is Vitaliy')
// //     break
// // case 'Anrey':
// // console.log('This is Andrey')
// // default:
// // console.log('Name is not recognized')                  
// // }



// // ? if
// // : else
// const closingTime = 10
// const currentTime = 5

// if(currentTime > closingTime){
//     console.log('Closed')
// }else{
//     console.log('Open')
// }

// const massive1 = [1,true,2]

// console.log('before',massive1)

// massive1.push(false)

// console.log('after',massive1)

// const age = 16

// if(age > 5 && age <= 18){
//     console.log('User has going to school')
// }

// const progLanguage = 'JavaScript'
// const experience = 2

// if(progLanguage === 'JavaScript' && experience > 1){
//     console.log('Welcome')
// }else{
//     console.log('Sorry')
// }

// const currentHours = 10

// if(currentHours < 8 || currentHours > 20){
//     console.log('Our office is closed')
// }else{
//     console.log('Welcome')
// }

// const userNicname = 'Artem'
// const defaultNickname = ''

// const nickname = userNicname || defaultNickname || 'noname'

// const finalNickname = userNicname && 'Пользователь существует'

// console.log(nickname)
// console.log(finalNickname)

// const hasAcess = false
// console.log(!hasAcess)
// if(!hasAcess){
//     console.log('Acess denied')
// }else{
//     console.log('Acess granted')
// }

// const answer = prompt('How old are you?')

// if(!answer){
//     alert('Enter your full age')
// }else{
//     alert(`You are ${answer} years old`)
// }

// const question1 = confirm('JavaScript появился в 1995 году?')
// let correctCount = 0
// let incorrectCount = 0

// if(question1 === true){
//     alert('Верно')
//     correctCount += 1
// }else{
//     alert('Не верно')
//     incorrectCount += 1
// }

// console.log(correctCount)
// console.log(incorrectCount)


// let massive2 = [1,2,3,4]

// for (i = 0; i < 4; i += 1) {
// console.log(i)
// }



// for( i = 11 ; i > 0; i -= 1){
//     console.log('i',i)
// }


// let j = 0
// while(j < 10){
    
//     console.log(j)
//     j += 1
// }


// let i = 0
// do {
// i+=1
// console.log(i)
// }while (i <= 5)



// let j = 5
// do{
//  j-=1
//  console.log(j)
// }while (j > 0)

let massive3 =[1,2,3,4,5]
// console.log(massive3.length)

// for(i = 0; massive3.length > i; i += 1){
//     console.log(i)
// }

// massive3.forEach(element => {
//     console.log(element)
// });


const object = {
    name: 'Oleg',
    age: 33,
    language: 'english',
    jobInfo:{
        type:'Front-end',
        framework: 'ReactJS'
    }

}

console.log('type', object.jobInfo.type)
console.log(object['jobInfo']['framework'])

// console.log(object)

// console.log(object.name)
// console.log(object.jobInfo)

// console.log(object['name'])

// const key = 'name'

// console.log(object[key])

// const student = {
//     id:1,
//     language:'JS',
//     exp:false,
// }

// student.exp1 = 10

// console.log(student)

// delete student.exp1
// console.log(student)

// const setName = (entity,value) => {
//     if (typeof entity === 'object'){
//     entity.name = value
// } else {
//     entity = value
// }
// }

// const developer = {
//     name:'Aleg'
// }

// let developName = 'Aleg'

// setName (developer,'Ruslan')
// console.log(developer)
// console.log(developName)


// const entity = {}
// const entityCopy = entity
// console.log(entity==entityCopy)

// console.log({}==={})
// console.log([]===[])
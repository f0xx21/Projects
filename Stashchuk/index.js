//     let a = 5
//     let b = 5

//     let c

//     function sum(a,b){
//      const c = a + b
//      console.log(c)   
//     }

//     a = 22.3
//     b = 420.5 

//  sum(a,b) 

// function myFn(a,b){
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
 
// const result1 = myFn(10,5)
// console.log(result1)

// const person1 = {
//     name: 'Ruslan',
//     age: 28
// }

// function ageUp(person){
//     person.age += 1
//     return person
// }
// ageUp(person1)
// console.log(person1.age)

// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redbutton = {
//     ...button,
//     color:'red'
// }

// console.table(redbutton)


// const buttonInfo = { 
//     text: 'Buy'
// }

// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }

// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }

// console.table(button)


// const human1 = {
//     name:'robot',
//     age: 170

// }

// const human2 = {
//     ...human1,
//     sex: 'undefined'
    
// }

// console.log(human2)


// let a = 10
// let b = 5
// let c

// function sum1(a,b) {
//     c = a + b
//     console.log(c)
// }


// sum1(1,2)
// console.log(c)

// let a = 5
// let b = 5
// let c
 
// function sum2(a,b) {
    
//    c = a + b
//     console.log(sum2)
// }

// sum2(a,b)
// console.log(c)


// let value 
// let multiplier
// let summ

// function myltiply(value, multiplier = 2){
    
//     return value * multiplier
// }

// console.log(myltiply(10,5))


// let sum3 = 0

// let multiplerAuto = (value  ,multiplier ) => {
//     sum3 = value * multiplier
//     return sum3
    
// }

// console.log(multiplerAuto(10,2))

// const multiplyer = (value,multipler) => {
    
//     return value * multipler
// }

// const multipyBy = (value) => value * 6

// result = multipyBy(7)
// console.log(result)

// let number = prompt('Enter your number')

// let multipler = prompt('Enter your multipler')

// let sum 
// function multiplyBy(number,multipler)  {
//     sum = number * multipler
    
// }

// multiplyBy(number,multipler)

// console.log(`результат`,sum)


// const newPost = (post,addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id: 1,
//     autor: 'Artem',
// }

// let post1 = newPost(firstPost)

// console.log(post1)



// DECLARATION ++++++++++++++++

// function getName1(name)  {
//    console.log(`hello ${name}`)
// }

// getName1('Artur')

// EXPRESSION +++++++++++++++

// const getName2 = function(name) {
//     console.log(`hello ${name}`) 
// }

// getName2('Alex')

// ARROW +++++++++++++ 

// const getName3 = (name) => {
//     console.log(`hello ${name}`) 
// }

// getName3('Georg')




// let drawCats = function(howManytimes) {
//     howManytimes = prompt('enter your numbers of cats')
//     for (let i = 0;i < howManytimes; i++){
//         console.log(i + ' =^.^=')
//     }
// }

// drawCats()


// let getSumOfNumbers = function(number,type){
//     let sum = 0
//     for (let i = 0; i <= number; i += 1 ){
//         const isEven = i % 2 === 0
//         const isOdd = !isEven
//         if (!type) {
//             sum += i
//         }else if (isEven && type === 'even'){
//             sum += i
//         }else if(isOdd && type === 'odd'){
//             sum += i
//     }
// }
// return sum
// } 

// const result = getSumOfNumbers(10,'even')
// console.log(`result`,result)


// function greetings(name){
//     name = prompt('enter your name')
//     console.log(`hello ${name}`)
// }

// greetings('Alexei')


// function feedAnimal(animalName){
//     console.log(`Животное ${animalName} было покормлено`)
// }

// feedAnimal(`КОТ`)


// const feedAnimal = function(animalName){
//     console.log(`Animal ${animalName} has been feeded`)
// }

// feedAnimal('Dog')

// const feedAnimal = (animalName) =>{
//     console.log(`Animal ${animalName} has been feeded`)
// }

// feedAnimal('Elephant')

// let result

//  function multiply(number,value){
//     number = prompt('enter number')
//     Number(number)
//     value = prompt('enter value')
//     Number(value)
   
//     return result = number * value

// }

// multiply()
// console.log(result)



//  function greetings1(name,hello){
//     name = prompt('enter your name')
//     hello =' hello'
//     greetings = name + hello
//     console.log(greetings)
// }

// greetings1()

// function sayHello(name){
//     name = prompt('enter your name')
//     text = 'hello'
//     console.log(`${name} ` + text)
// }
// sayHello()


// let power = function(text1,text2){
//     text1 = 'hello '
//     text2 = 'world'
//     console.log(text1+text2)
// }

// power()

// let smile = (text2,text3) => {
//     text2 = 'be'
//     text3 = ' happy'
//     console.log(text2 + text3)
// }

// smile()

// let massive1 = ['James','Igor','Alex']
// massive1.push = 'Dmitry'
// console.log(massive1)
// console.log(massive1)
// massive1.push = 'Misha'
// console.log(massive1)
// massive1.unshift = 'Alina'
// console.log(massive1)

// let massive2 = [400,500,600,2000,350]


// massive2.pop()

// massive2[4] = 7000
// console.log( massive2)

// for (i = 0; i < massive2.length; i += 1){
//     console.log(`i`,i)
//     console.log(`item`,massive2[i])
// }

// console.log(massive2[2])


// for (const name of massive1){
//     console.log(name)
// }

// massive1.forEach((name,index,array)=>{
//     console.log(`name`,name,`index`,index,`array`,array)
// })

// massive3 = ['Artem','Ruslan','Viktoria','Andrey']
    
// for (let i = 0; i < massive3.length; i += 1){
//         console.log(i)
//         console.log(massive3[i])
//     }


// massive3.forEach((name,index,array)=>{
//     console.log(name)
//     console.log(index)
// })



// massive3.forEach((name,index) => {
//     // console.log(`name`,name)
//     console.log(`index`,index)
// });


// const getSumOfSequence = (number) =>{
//     let array = []
//     for (i = 0; i < number; i += 1){
//         console.log(i)
//         array.push(i)
        
//     }
//     return array[0] + array[array.length - 1]
// }
// const result = getSumOfSequence(8)
// console.log(`result`,result)

// let massive4 = ['Artem','Nikolay','Vitaliy','Alexandr']

// for (let i = 0; i < massive4.length; i += 1){
//     console.log(`i`,i)
//     console.log(massive4[i])
// }

// massive4.forEach((name,index,array) =>{
//     // console.log(index)
//     // console.log(name)
// })

//  function getSumOfSequence(number) {
   
//  for (let i = 0; i < number; i+= 1)
 
//  console.log(i)
//     return number + 1
// }

// getSumOfSequence(15)


// function arraySum(number){
//     for (let i=0;i < number; i += 1){
//         console.log(i)
//     }
// }
// arraySum(1)

// let a = 111

// let b = 11


// function auto(number) {
//     if(a < b){
//         console.log('a less than b')
//     }else if(a > b){
//         console.log(`a bigest than b`)
//     }else if(a === b) {
//         console.log(`a equally b`)
//     }  
// }
 
// auto()


// let nationalPassport = true
// let foreginPassport = true

// if(nationalPassport && foreginPassport){
//     console.log(`has passport`)
// }else{
//     console.log(`does not passport`)
// }



// const button = {
//     width: 200,
//     text: 'buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// const buttonInfo = {
//     text: 'buy',
// }

// const buttonStyle = {
//     widht:200,
//     color: 'white',
//     height:300,
// }

// const newButton = {
//     ...buttonInfo,
//     ...buttonStyle
// }
// console.table(newButton)


// const myName = 'Artem'
// const myCity = 'Rostov-on-Don'

// let showMyName = function()  {
//     console.log(`Hello my name is ${myName} i live in ${myCity}`)
// }
// showMyName()



// const arrow = (a,b) => {
//     let c
//     c = a + b
//     console.log(c)
//     return c
    
// }
// arrow(11,22)

// setTimeout(() =>{
//     console.log(`Message!`)
// }), 1000

// setTimeout()

// function multiplyBy(value,multipler = 2){
//     return value * multipler
// }
// console.log(multiplyBy(5))

// a = 5
// b = 5

// multiplyBy = (value,multipler) =>{
//     return value * multipler
// }

// console.log(multiplyBy(5,2))



// const fnWithError = (params) => {
//     throw new Error(`some error`)
// }




// try {
//     fnWithError()
// }catch (error){
//     console.error(error)
//     console.log(error.message)
// }
// console.log(`continue`)




// function myFn(a){
//     console.log(a);
// }

// const b = true;
// let c = 10;

// myFn('Vika')
// myFn(b)
// myFn(c = c + 1)
// // myFn(prompt('who are you?'))

// const myArray = [1,2,3,4]
// console.log(myArray)

// const myArray2 = Array(1,2,3,4)
// console.log(`Array2`,myArray2)

// let myObject = {
//     id: 'lox',
//     age: 30,
//     gender: 'female',
// }
// console.log(myObject)

// myArray.unshift(true)
// myArray[1] = false
// myArray.shift()
// console.log(myArray)


// let myArray = [1,2,3,4]
// // console.log(myArray)

// // let result = myArray.forEach(elements => console.log(elements * 2))

// // console.log(myArray)



// // const newMyArray3 = myArray.map(element => element * 3)

// // console.log(`original`,myArray)
// // console.log(`new + map method`,newMyArray3)

// const newMyArray4 = myArray.map((element)=>{
//     console.log(element)
//     return element * 3
    
    
// })

// console.log(newMyArray4)

// const userProfile = {
//     name:'Ruslan',
//     id: 1488,
//     age: 28,
// }

// const {name,id} = userProfile
// console.log(name)
// const {age} = userProfile
// console.log(age)

// const massive5 = ['Apple','Orange']

// const [apple,orange] = massive5
// console.log(apple)
// console.log(orange)


// const userProfile2 = {
//     name:'Ruslan',
//     commentsQty:23,
//     hasSignedAgreement:false,

// }
// const userInfo = ({name,commentsQty} ) =>{
// if(!commentsQty){
//     return `user${name} has no comments`
//     }
//     return `user ${name} has ${commentsQty} comments`
// }

// console.log(userInfo(userProfile2))
// console.log(name)

// let number = 20
// if(number < 10){
//     number += 20
// }else{
//     number -=20
// }
// console.log(number)




// const person = {
//     name:'Alex',
//     age:20,
// }
//  if(person.name === 'Boris'){
//      console.log(`Name is ${person.name}`)
//  }else{
//      console.log(`Name is not recognized`)
//  }

//  const age = 17

//  if (age >= 18){
//      console.log(`is adult`)
//  }
//  if(age >= 12 && age < 18){
//      console.log(`is teenager`)
//  }
//  if(age < 12){
//      console.log(`is child`)
//  } 

//  const sumNumbers = (a,b) => {
//     if (typeof a !== 'number' || typeof b !== 'number'){
//         return `One of the arguments is not a number`
//     }
//     if (a <= 0 || b <= 0){
//         return `numbers are not positive`
//     }
//     return a + b
// }

// console.log(sumNumbers(10,5))

// const myFunction4 = (a,b) => {
//     result = a - b
//     console.log(result)
//     return result
    
// }
// myFunction4(10,5)


// const sumPositiveNumbers = (a,b) => {
//     if (typeof a !== 'number' || typeof b !== 'number'){
//         return 'one of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0){
//         return ('numbers are not positive')
//     }
//     return a + b 

// }
// sumPositiveNumbers(1,6)


// const month = 12
// switch (month){
//         case 12:
//             console.log('December')
//         break
//         case 1:
//             console.log('January')
//         break
//         case 2:
//             console.log('Febraruy')
//         break
//         default:
//         console.log('This is not winter month')        
        
// }


// const name2 = 'Ashot'
//  switch(name2){
//      case 'Vika':
//          console.log('Welcome Vika!')
//      break
//      case 'Ruslan':
//          console.log('Wlcome Ruslan!')
//      break    
//      default:
//          console.log('Go out!')
        
//  }

//  const temperature = 10

//  switch(temperature){
//      case 0:
//          console.log('Water freezing temperature')
//          break
//      case 10:
//          console.log('Warm water')
//          default:    
//  }

//  const value = 11 

//  value
//  ? console.log('True')
//  : console.log('False')

//  console.log(value)


//  console.log( value >= 0 ? value : -value)


//  const value2 = -5
//  const res = value2 >= 0 ? value : -value2
//  console.log(res)

//  let travel  = 'maldives'

//  switch(travel){
//      case 'maldives':
//          console.log('ЯХААААЙ')
//          break
//      case 'turkey':
//          console.log('Nooooooo')    
//         break
//         default:
//         }      
 
//  travel ? travel == 'maldives': travel == 'turkey'       
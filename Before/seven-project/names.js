//  // declaration
// let name1 = prompt(`Введите ваше имя`)
// function getName1(name1)   {
//    console.log(`Добрый день ${name1}.`)
// }
//  getName1(name1)

// //expression
//   const getName2 = function(name2 = `Сергей`){
//       console.log(`Добрый вечер ${name2}`)
//   }
//   getName2()

// // Стрелочная

// const getName3 = (name3 = `Игорь`) => {
//     console.log(`Добрый вечер ${name3}`)
// }
// getName3()

// const getSumOfNumbers = (number,type = 'odd') => {
//     let sum = 0
// for (let i = 0; i <= number; i+= 1){
//     const isEven = (i % 2) === 0;
//     const isOdd = (!isEven);
// if  (!type) {
//     sum += i
// }else if( isEven && type === `even`){
//     sum += i
// }else if( isOdd && type === `odd`){
//     sum += i
//     }
// }
// return sum
// }
// const result = getSumOfNumbers(10, 'odd')
// console.log(`result`,result)


// function getDivisors(number = 1)  {
   
// if(!Number.isInteger(number) || number < 0){
//     alert('number должен быть целым числом и больше нуля!')
// }else { 
//     let counter = 0
//     for (let i = number; i > 0; i -= 1){
//       let isDivisor = number % i === 0
//         if (isDivisor){
//         counter += 1
//         }
//     }
//     return counter
// }
// }
// const result = getDivisors(10)
// console.log(result)



// const checkQuestionAnswer = (question,correctAnswer) =>{
//     let userAnswer = prompt(question)
//     userAnswer = userAnswer.trim().toLowerCase()
//     if (correctAnswer.toLowerCase() === userAnswer){
//         alert(`Ваш ответ верный`)
//     }else{
//         alert(`Ваш ответ не верный`)
//     }
// }
// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')

// const showSucessMessage = (message) => {
//     console.log(message)
// }
// const showErrorMessage = (message) => {
//     console.error(message)
// }
// const checkTextOnErrorsSymbol = (text,errorSymbol,successCallback,errorCallback) => {
//     let countErrors = 0
//     for (let i = 0; i < text.length; i += 1 ){
//         const currentSymbol = text[i]
//     if(currentSymbol === errorSymbol && errorCallback){
//         errorCallback(`Найден символ который запрещен ${errorSymbol} под индексом ${i}.`)
//         countErrors += 1
//     }
// }
//     if (successCallback && countErrors === 0){
//         successCallback(`В тексте нет запрещенных символов`)
//     }
// }

// const text = (`Привет! Как дела! Давно мы с тобой не виделись.`)
// checkTextOnErrorsSymbol(text, 'Ф', showSucessMessage, showErrorMessage)

// let departament = [`kolgan`,`hoperskov`,`salnikov`,`titov`]
// console.log(departament[0])

// salaries = [500,600,700,1000,1500]
// console.log(salaries.length)

// const newSenior = 5000
// salaries.push(newSenior)


// salaries.unshift(250,270,280)


// salaries.pop()
// console.log(salaries)

// salaries[4] = 6000
// console.log(salaries)


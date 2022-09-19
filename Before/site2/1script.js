


// const age = 31

//const isProgrammer = true


// const lastName = prompt('Введите фамилию')
 //   alert(firstName + ' ' + lastName)

// операторы
//let currentYear = 2021
//const birthYear = 1989



//const age = currentYear - birthYear 

//const a = 10
//const b = 5
//let c = 30 
//c += a

//console.log(a + b)
//console.log(a - b)
//.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(++currentYear)
//console.log(c)

    //const isProgrammer = true
    //const age = 26
    //const name = 'artem'
    //console.log(typeof isProgrammer)
    //console.log(typeof age)
    //console.log(typeof name)

    //const fullAge = 26
    //const birthYear = 1989
    //const currentYear = 2021

    //const isFullAge = (currentYear - birthYear) >= fullAge
    //console.log(isFullAge)

    //const courseStatus = 'pendng' //ready,fail,pending
    //if (courseStatus === 'ready'){
    //    console.log('Курс уже готов и его можно проходить')
    //}
   //  else if (courseStatus === 'pending'){
   //     console.log('Курс находится в разработке')
   // }
   // else {
    //    console.log('Курс не получился')
    //}

  // const isReady = false
   //if (isReady === false){
       //console.log ('all done')
   //}
   //else{
   //    console.log('all is not done')
   //}
   // тернароное выражение
//isReady ? console.log ('all done') : console.log('all is not done')
//iseReady ? console.log ('all done') : console.log('all is not done')

// function calculateAge(year){
//     return 2021 - year
// }


// function logInfoAbout(name,year){
// const age = calculateAge(year)
//  if (age > 0) {
//   console.log('Человек по имени ' + name + ' сейчас имеет возраст' +  age)
// } else {
//     console.log('Это уже будущее!')

// }

// }

// // logInfoAbout('Artur ', 1989)
// // logInfoAbout('Vartan', 1987)
// // logInfoAbout('Vartan', 2023)

// const cars = ['mazda', 'kia', 'ford']

// console.log(cars)
// cars [0] = 'Porsche'

// const cars = ['mazda', 'kia', 'ford']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]

// for (let car of cars){
//     console.log(car)
// }

const person = {
    firstName: 'artem',
    lastName: 'kolgan',
    year: 1989,
    languages:['ru','eng'],
    isCustomer: true,
    greet:function(){
        console.log('greet')
    }
}
const key = 'languages'
console.log(person)
person.hasWife=true

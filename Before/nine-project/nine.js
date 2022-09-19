// for

const numbers = [10,4,100,-5,54,2]

let sum1 = 0
for (let i = 0; i < numbers.length; i += 1){
    sum1  += numbers[i] ** 3
}
console.log(sum1)

//for of

let sum2 = 0
for (const number of numbers){
    sum2 += number ** 3
}
console.log(sum2)

//for each
let sum3 = 0
numbers.forEach((number) => {
    sum3 += number ** 3
        
})
console.log(sum3)

//reduce

let sum4 = numbers.reduce((acc,number)=>{
    return  acc + number ** 3
},0)

console.log(sum4)

const salariesOfDevelopers = [400,2000,500,600,350]
salariesOfDevelopers.sort((a,b) =>{
    return a - b
    })
console.log(`salariesofdevelopers`, salariesOfDevelopers) 



//splice
const cars =[`BMW`, `Mercedes`, `Lada`]

const removedElements = cars.splice(0,2,`Audi`,`Kia`)
console.log(removedElements)
console.log(cars)


//slice

const agesOfDevelopers = [25,18,45,30]
console.log(agesOfDevelopers.slice(0,2))

//index of

const favoriteFood = [`Kasha`,`Maslo`,`Mayonez`]

const indexOfFood = favoriteFood.indexOf(`Mayonez`)
console.log(indexOfFood)

//includes

const technologies = [`JavaScript`,`Html`,`CSS`]

const isTechnologyExist = technologies.includes(`CSS`)
console.log(isTechnologyExist)


//split + join

const listOfOrders = `Майка. Шорты. кроссовки.`
const listOfOrdersArray = listOfOrders.split()
console.log(listOfOrdersArray)

const ordersString = listOfOrdersArray.join(`,`)
console.log(ordersString)

//reverse

technologies.reverse()
console.log(technologies)
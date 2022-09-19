const developerNames = [`Maxim`,`Igor`,`Nastya`,`Irina`]

for (let i =0;i<developerNames.length;i+=1){
   console.log(i)
   console.log(developerNames[i])
}

//for

// for(начальное значение; условие; шаг){

// }

// console.log(developerNames[1])

// for( let i=0;i<developerNames.length;i+=1){
//     console.log(`i`,i)
//     console.log(`item`,developerNames[i])
// }

//for of

// for(let name of developerNames){
//     console.log(name)
// }

//for each

// developerNames.forEach((name,index,array) => {
//     // console.log(`name`,name)
//     console.log(`index`,index)
//     console.log(`array`, array)
// })

// const getSumOfSequence = (number) => {
//     const finalArray = []
//     for (let i= 4;i<number;i+=1){
//         finalArray.push(i)
//     }
//     return finalArray[0] + finalArray[finalArray.length -1]
// }
// const result = getSumOfSequence(10)
// console.log(`result`,result)
    
// 

// const updatedSalaries = salariesOfDevelopers.map((salary,index,array) => {
//     return salary * 2
// })
// console.log(updatedSalaries)

// //
// let message = `Krasavchik`
// const departamentOfSecurity = [`titov`,`kolgan`,`hoperskov`]
// const updatedDepartamentOfSecurity = departamentOfSecurity.map((name,index,array) =>{
//     let i = `JTU`
//     return name + ` ` + (message) + ` ` + i
// })
// console.log(updatedDepartamentOfSecurity)
// console.log(name)

// // filter

// const filteredSalaries = salariesOfDevelopers.filter((salary,index,array) =>{
//     return index % 2 === 0
// })
// console.log(filteredSalaries)

// const allPeople = [50,100,250]

// let modificatedAllPeople = allPeople.map((name,array,index)=>{
//     return array + 2
// })
// console.log(modificatedAllPeople)
// console.log(allPeople)


// const searchedSalary = salariesOfDevelopers.find((salary)=>{
//     return salary > 400
// })
// console.log(searchedSalary)

//find index
// const salariesOfDevelopers = [400,500,600,2000,350,]
// const searchedIndex = salariesOfDevelopers.findIndex((salary) =>{
//     return salary === 2000
// })
// console.log(searchedIndex)


//sum

// const elementsExist = salariesOfDevelopers.some((salary) =>{
//     return salary > 3000
// })
// console.log(elementsExist)


// const allElementsExist = salariesOfDevelopers.every((salary) =>{
//     return salary > 0
// })
// console.log(allElementsExist)

const numbers = [10,4,100,-5,54,2]

let allNumbers = numbers.forEach((name,index,array) =>{
   console.log(`name`,name)
   console.log(`index`, index)
},0)

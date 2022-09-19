//date 

const date = new Date()
console.log(`date`,date)

const newDate = new Date (2000,1,10,11,55,5,5000)


console.log(`year`,newDate.getFullYear())
console.log(`month`,newDate.getMonth())
console.log(`date`,newDate.getDate())



// день недели
// 0-6
console.log(`day`,newDate.getDay())
if (newDate.getDay() === 4){
    console.log(`today is a thuesday`)
}

newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(20)
console.log(`new date`, newDate)

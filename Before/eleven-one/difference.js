// getTime

// const date1 = new Date(2005,4,20)
// const date2 = new Date(2006,4,10)


// console.log(`date1`,date1.getTime())
// console.log(`date2`,date2.getTime())

// const difference = date2.getTime() - date1.getTime()
// console.log(`difference`,difference/1000/60)


// const startTime = Date.now()
// for (let i = 0; i < 10000000; i += 1){

// }
// const endTime = Date.now()

// console.log(`start time`, startTime)
// console.log(`end time`, endTime)

// const difference = endTime - startTime
// console.log(`difference`, difference)

// const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr)

// const getDateFormat = (date,separator = `.`) =>{
//     const dateItem = date.getDate()
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     const dateArray = [dateItem,month + 1, year].map((item)=> addZero(item))
//     console.log(dateArray)
// return dateArray.join(separator)
// }

// console.log(getDateFormat(new Date()))

// const convert = (ms) => Math.round (ms / 1000 / 60 / 60 / 24)
// const getDaysBeforeBirthday = (nextBirthdayDate) => {
//     const currentDateMs = Date.now()
//     const birthdayDateMs = nextBirthdayDate.getTime()
    
// return convert(birthdayDateMs - currentDateMs)
// console.log(currentDateMs)
// }

// console.log(getDaysBeforeBirthday(new Date (2021, 31, 10)  ))


const converDaysToMS = (days) => days * 24 * 3600 * 1000
const addDays = (date,days = 1) => {
    return new Date (date.getTime() + converDaysToMS(days))
}

const date = new Date()
console.log(`do`,date)
const newDate = addDays(date,5)
console.log(`posle`,newDate)

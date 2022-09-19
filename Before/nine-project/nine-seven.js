const goals = [8,1,1,3,2,-1,5]

let maxNumberOfGoals = goals[0]
let maxNumberOfGoalsIndex = 0
let minNumberOfGoals = goals[0]

goals.forEach((goalNumber,index)=>{
    console.log(goalNumber)
    if (goalNumber > maxNumberOfGoals){
        maxNumberOfGoals = goalNumber
        maxNumberOfGoalsIndex = index
    }
    if (goalNumber < minNumberOfGoals && goalNumber >= 0){
        minNumberOfGoals = goalNumber
    }
})
console.log(`minNumberOfGoals`,minNumberOfGoals)
let gamesWithMinNumberOfGoals = goals
.map((goalNumber,index) => goalNumber === minNumberOfGoals ? index + 1 : -1)
.filter ((goalNumber) => goalNumber > 0)
console.log(`gamesWithMinNumberOfGoals`, gamesWithMinNumberOfGoals)


alert(`Самый результативный матч был под номером - ${maxNumberOfGoalsIndex + 1} В нем забито ${maxNumberOfGoals} голов`)
alert(`Самые нерезультативные матчи были под номерами ${gamesWithMinNumberOfGoals.join(`, `)} В каждом из них было забито ${minNumberOfGoals} мячей`)


let numberOfGoalsPerSeason = goals.reduce((acc,goalNumber)=>{
    return goalNumber >= 0 ? acc + goalNumber : acc
},0)

alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`)

const automaticDefeats = goals.some((goalNumber)=> goalNumber < 0)
if (automaticDefeats){
    console.log(`Автоматические поражени: ДА`)
}else{
    console.log(`Автоматические поражения: НЕТ`)
}

const averageNumberOfGoalsPerGame = numberOfGoalsPerSeason / goals.length

alert(`Среднее кол-во голов за матч равно ${averageNumberOfGoalsPerGame}`)

const upSortingGoals = goals.sort((a,b)=> a-b)
alert(upSortingGoals.join(`, `))





















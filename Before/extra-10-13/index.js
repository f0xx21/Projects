// let hero = {
//     name:`Batman`,
//     health: 100,
//     heatEnemy: (enemy) => enemy.health -=15
// }
// const enemy = {
//     name: 'Joker',
//     health: 100,
//     heatHero: (hero) => hero.health -= 15
// }

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;

// } 
// function startGame(heroPlayer,enemyPlayer) {
//     while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
//         const randomHeatIndex = getRandomNumberInRange(0, 1)
//         if (randomHeatIndex === 0) {
//             heroPlayer.heatEnemy(enemyPlayer)
//             if (enemyPlayer.health <= 0) {
//                 break;
//             }
//         } else {
//             enemyPlayer.heatHero(heroPlayer)
//             if (heroPlayer.health <= 0) {
//                 break;
//             }
//         }
//     }
//     if (heroPlayer.health <= 0){
//         alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
//     } else {
//         alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
//     }
// }

// startGame(hero, enemy);  
    
// function getKiller(suspectInfo, deadPeople) {
//     let killerName = ''
//     Object.entries(suspectInfo).forEach((data) => {
//         const suspectPerson = data[0]
//         const peopleWereSeen = data[1]
//         const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName))
//         if (isKiller) {
//             killerName = suspectPerson
//         }
//     })
    
//     return killerName
// }


// let todaysWinner = {
//     prize: `10 000$`,
// }

// const winnerApplicants = {
//     '001': {
//         name: 'Максим',
//         age: 25,
//     },
//     '201': {
//         name: 'Светлана',
//         age: 20,
//     },
//     '304': {
//         name: 'Екатерина',
//         age: 35,
//     },
// }

// function getRandomNumberInRange(min,max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
// const getWinner = (applicants,winnerObject) => {
//     const applicationsNumbers = Object.keys(winnerApplicants)
//     const winnerIndex = getRandomNumberInRange(0,applicationsNumbers.length)
//     const winnerNumber = applicationsNumbers[winnerIndex]
//     const winnerPerson = applicants[winnerNumber]
// return {
//     ...winnerObject,
//     ...winnerPerson,
//     }
// }
// const resultWinner = getWinner(winnerApplicants, todaysWinner)
// console.log('resultWinner', resultWinner)
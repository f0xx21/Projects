//for
//while
//do while

// for (начальное значение; шаг){

// }

// for (let i = 0; i < 11; i += 1){
// console.log(i)
// }

// for (let j = 0; j < 10; j +=0.5){
//     console.log(j)
// }



// //while
// let i = 0
// while (i <10){
//     i += 1
//     console.log(i)
// }


//do while


// let i = 0
// do{
// console.log(i)    
// i+=1
// }while(i<10)

// let i = 0
// while (i < 3){
//     let newStudent = prompt('Введите имя нового студента')
//     newStudent.trim()
//     if (newStudent){
//         alert(`Добро пожаловать ${newStudent}`)
//     }
//     i += 1
//     console.log(i)
// }

// let j = 0

// do{
//     let newStudent = prompt('Введите имя нового студента')
//     newStudent.trim()
//     if (newStudent){
//         alert(`Добро пожаловать, ${newStudent}!`) 
//     }
//     j += 1
// }while (j <3)


// let sum = 0
// for (let i = 0; i <= 5; i += 1){
//     sum += i
    
// } 
// console.log(sum)


let clientName = prompt (`Имя клиента`)
let clientSpentForAlltime = prompt(`Сколько клиент потратил за все время?`)
let clientSpentToday = prompt(`Сколько клиент потратил сегодня?`)
let discount = 0
clientSpentForAlltime = Number(clientSpentForAlltime)
clientSpentToday = Number(clientSpentToday)


if (clientSpentForAlltime >= 100 && clientSpentForAlltime < 300 ){
     discount = 10
    console.log(`${clientName} Ваша скидка 10%`)
}else if (clientSpentForAlltime >= 300 && clientSpentForAlltime < 500){
     discount = 20
    console.log(`${clientName} Ваша скидка 20%` )
}else if (clientSpentForAlltime >= 500 ){
     discount = 30
    console.log(`${clientName} Ваша скидка 30%`)
}

clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100)
clientSpentForAlltime += clientSpentToday

alert(`Спасибо ${clientName}! К оплате ${clientSpentToday}. За все время в нашем ресторане вы потратили ${clientSpentForAlltime}  `)



// const clientName = 'Игорь'
// let clientSpentForAllTime = 110
// let clientSpentToday = 25 

// let discount = 0

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//     discount = 10;
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500){
//     discount = 20
// }
// else if (clientSpentForAllTime >= 500 && clientSpentForAllTime >500){
//     discount = 30
// }

// alert(`Вам скидка! ${discount} %`)

// clientSpentToday = clientSpentToday -(clientSpentToday * discount /100 ) 
// clientSpentForAllTime += clientSpentToday
// alert(`К оплате ${clientSpentToday}, за все время в нашем ресторане Вы потратили ${clientSpentForAllTime} `)




// let discount = 0
// let clientName = prompt(`Введите имя клиента`)
// let clientSpentToday = prompt(`Сколько клиент потратил денег сегодня?`)
// clientSpentToday = Number(clientSpentToday)
// let clientSpentForAllTime = prompt(`Сколько клиент потратил за все время?`)
// clientSpentForAllTime = Number(clientSpentForAllTime)

// if (!clientSpentToday || !clientSpentForAllTime){
//     alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу`)
// } else {
//     if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//         discount = 10
//     } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//         discount = 20
//     } else if (clientSpentForAllTime >= 500) {
//         discount = 30
//     }
    
//     alert(`Вам предоставляется скидка в ${discount}%`)
// }
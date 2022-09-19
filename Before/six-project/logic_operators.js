// && (И)
// || (ИЛИ)
// ! (НЕ)

const userAge = 16
if (userAge > 5 && userAge <=18){
    console.log('user going to school')
}

const programingLanguage = 'JavaScript'
const experienceInYear = 4

if (programingLanguage === 'JavaScript' && experienceInYear > 1){
    console.log('welcome')
}else{
    console.log('sorry')
}
 const currentHours = 21

 if(currentHours < 8 || currentHours > 20){
     console.log('office closed')
 }else{
     console.log('welcome to office')
 }

const userNickname = 'Maxim'
const defaultNickname = ''
const nickName = userNickname || defaultNickname || 'noname'

const finalNickname = userNickname && 'пользователь существует'

console.log('nickname',nickName)
console.log('finalNickanme', finalNickname)

// ! (не)

// const hasAcess = true
// if(!hasAcess){
//     console.log('dostup otkrit')

//     }else{
//         console.log('dostup zakrit')
//     }

//     const answer = prompt('сколько вам лет?')
//     if (!answer ){
//         alert('введите полное количество лет')
//     }else{
//         alert(`Вам ${answer} лет`)
//     }

    // оператор объединения с null ??
    
    console.log(false || 'Hello World')
    console.log(false ?? 'Hello world')
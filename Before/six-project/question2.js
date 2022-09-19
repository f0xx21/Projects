let correctAnswers = 0
let incorrectAnswers = 0

// 1 вопрос

const question1 = ('Сколько будет 2 + 2?')
const answer1 = 4

const userAnswer1 = prompt(question1)
if (Number(userAnswer1) === answer1 ){
    alert('Ответ правильный')
    correctAnswers += 1
} else {
    alert('Ответ не верный')
    incorrectAnswers += 1
}
// 2 вопрос

const question2 = ('Сколько будет 2 * 2?')
const answer2 = 4

const userAnswer2 = prompt(question2)
if (Number(userAnswer2) === answer2){
    alert('Ответ правильный')
    correctAnswers += 1
} else {
    alert('Ответ не правильный')
    incorrectAnswers +=1
}
// 3 вопрос

const question3 = ('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
const answer3 = 1

const userAnswer3 = prompt(question3)
if (Number(userAnswer3) === answer3){
    alert('Ответ правильный')
    correctAnswers += 1
} else {
    alert('Ответ не правильный')
    incorrectAnswers +=1
}

// 4 Вопрос

const question4 = ('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
const answer4 = 12

const userAnswer4 = prompt(question4)
if (Number(userAnswer4) === answer4){
    alert('Ответ правильный')
    correctAnswers += 1
}else{
    alert('Ответ не правильный')
    incorrectAnswers += 1
}

// 5 вопрос

const question5 = 'Сколько будет 2 + 2 * 2?'
const answer5 = 8

const userAnswer5 = prompt(question5)
if (Number(userAnswer5) === answer5){
    alert('Ответ правильный')
    correctAnswers += 1
}else{
    alert('Ответ не правильный')
    incorrectAnswers += 1
}

alert (`Конец теста! Правильные ответы ${correctAnswers} ,Неправильные ответы ${incorrectAnswers} `)
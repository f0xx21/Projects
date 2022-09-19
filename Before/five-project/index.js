// const myName = 'Artem'
// const programmingLanguage = 'JavaScript'
// const reasonText = 'хочу заниматься любимым делом'
// const courseCreatorName = 'Владилена Минина'
// const numberOfMonth = 1

// console.log(myInfoText)
// console.log('Всем привет! Меня зовут',`${myName}`,'Сейчас я изучаю язык программирования', `${programmingLanguage}`, 'на курсе по', `${programmingLanguage}`,'у',`${courseCreatorName}`,'.')

// console.log('Я хочу стать веб-разработчиком, потому что',`${reasontText}`,'.','До этого я изучал',`${programmingLanguage}`,`${numberOfMonth}`,'месяцев.','Я уверен что пройду данный курс до конца!')
// 
// let myInfoText = (`Всем привет! Меня зовут ${myName} Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен что пройду данный курс до конца!`)

// console.log(myInfoText)

// console.log(myInfoText.replaceAll('JavaScript','JAVASCRIPT'))
// console.log(myInfoText.length)
// console.log(myInfoText[0],myInfoText[274])

// const userAnswer = prompt('Как вас зовут?')
// let userName = userAnswer.trim()
// console.log(userName.toLowerCase())
// alert('ваше имя:'+ ' ' + userName)


// userAge =  prompt('Сколько вам лет?')
// console.log(Number(userAge))
// alert(`Вам ${userAge.trim()} лет`)
// alert(`Вас зовут ${userName} и вам ${userAge} года`)

// let userString = prompt('Введите текст для обрезки:')
// let startSliceIndex = prompt(`Введите индекс, с которого нужно начать обрезку строки`)
// let endSliceIndex = prompt(`Введите индекс, которым нужно закончить обрезку строки`)
// startSliceIndex = Number(startSliceIndex)
// endSliceIndex = Number(endSliceIndex)

// const  resultString = userString.trim().slice(startSliceIndex,endSliceIndex)
// alert(`Результат: ${resultString}`)


// let userText = prompt(`Введите текст`)
// userText = userText.trim()
// let wordFromText = prompt(`Введите слово из текста`)
// wordFromText = wordFromText.trim()

// const indexOfWord = userText.indexOf(wordFromText)
// const resultString = userText.slice(0, indexOfWord)
// alert(`Результат: ${resultString}`)


// let javaScriptDescription = `“JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.”`

// console.log(javaScriptDescription.length)
// // let javaScriptDescription = javaScriptDescription.slice(1,140)
// // javaScriptDescription = javaScriptDescription.replaceAll(`а`,`А`)
// console.log(javaScriptDescription.replaceAll ('а','А'))
// console.log(javaScriptDescription.slice(1,140))
// javaScriptDescription = javaScriptDescription.slice(1,140)
// console.log(javaScriptDescription.replaceAll(' ',''))
// console.log(javaScriptDescription.repeat(3))
// console.log(javaScriptDescription.length)
// console.log(javaScriptDescription[138])
// console.log(javaScriptDescription.to)

// const text = '"JavaScript очень популярный язык программирования"'

// console.log(text)

// const text = 'NodeJS and JavaScript'
// text[0] = 'n'
// console.log(text)

// let text = '\'JavaScript\' - очень популярный язык программирования'
// console.log(text)
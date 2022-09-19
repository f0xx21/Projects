const animal = 'Lion'
console.log('upper',animal.toUpperCase())
console.log('lower',animal.toLowerCase())

const text = 'мой любимый язык JS'
console.log('indexOf',text.indexOf('JS'))
console.log('includes',text.includes('JS'))

//обрезка строки slice,substring

// const programmingLanguage = 'JavaScript'
// console.log('slice',programmingLanguage.slice(3))
// console.log('substring', programmingLanguage.substring(1,3))


// замена символов в строке - replace, replaceAll

const programmingLanguage = 'JavaScript'
console.log('replace', programmingLanguage.replace('Script',123 ))
console.log('replace', programmingLanguage.replaceAll('a','A' ))

//repeat

const hellotext = 'hello'
console.log(hellotext.repeat(3))

//trim
const nameOfUser = prompt('как вас зовут?')
console.log('name:', nameOfUser.trim())
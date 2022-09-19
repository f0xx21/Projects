// 7 типов данных
// 1 не примитив - объект (ссылочный тип)

// let  name = ``

// const setName = (entity,value) =>{
//     if (typeof entity === `object`){
//     entity.name = value
// }else{
//     entity = value
//         }   
// }

// const developer ={
//     name:`Artem`,
// }
// let developerName = `Artem`

// setName(developer,`Art`)
// setName(developerName,`Art`)
// console.log(developer)
// console.log(developerName)

// console.log({} === {})
// console.log([]===[])

// const name = []
// const nameCopy = name

// console.log(name === nameCopy)

const handleObject = (obj,key,action = `get`) => {
    switch (action){
        case `get`:
            return obj[key]
        case `delete`: {
            delete obj[key]
            return obj
        }    
case `add`:
    obj[key] = ``
    return obj
   default:
       return obj 
    }
}

const student = {
    name: `Maxim`,
    programmingLanguage: `JavaScript`,

}
const result = handleObject(student,`programmingLanguage`,`delete`)
console.log(result)


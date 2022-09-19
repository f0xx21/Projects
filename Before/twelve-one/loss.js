const user = {
    name:'Artem',
    programmingLanguage: `JavaScript`,
    getName(){
        return this.name
    },
getProgrammingLanguage: function() {
    return this.getProgrammingLanguage
},
}

console.log(user.getName())
const newGetName = user.getName
console.log(newGetName.call(user))

console.log(user.getProgrammingLanguage()) 

let photographer = `Ruslan`
console.log(photographer)
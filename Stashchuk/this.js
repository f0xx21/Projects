// console.log(this)


// const user = {
//     name:'Alex',
//     date: 2002,
//     getName(){
//         return this.name
//     },
//     calculate(){
//         const year = new Date().getFullYear()
//         return year - this.date
//     },
//     getAllinfo: function (){
//         const age = this.calculate()
//         console.log(`name`,this.name,`age ${age}`)
//     }
    
    
// }

// console.log(user.getName())

// console.log(user.calculate())

// user.getAllinfo()


// //bind,call,apply

// const user2 = {
//     name: 'Rusik'
// }

// const user2Name = user.getName.call(user2)

// console.log(user2Name)



const user = {
    name:'A',
    programming: 'JS',
    getName(){
        return this.name
    },
    getProgramming() {
        return this.name
}

}

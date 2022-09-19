//string,symbol

// const id = Symbol('id')


// const user = {
//     [id]: 1,
//     name:'Oleg',
 
// }

// console.log(user)

// console.log(Object.keys(user))

//  const countainer1 = {
//      a:1,
//      b:2,
//      c:3,
//  }

//  const countainer2 = {
//      x:4,
//      y:5,
//      z:6
//  }

// //spread operator

//  const multiCountainer = {
//      summary:true,
//      ...countainer1,
//      ...countainer2
//  }

//  console.log(multiCountainer)

const massive1 = {
    name:'Ruslan',
    age: 32,
    language: {
        x: true,
        y: false
    }

}

if(massive1?.name?.language){
console.log('true')
}else{
    console.log('false')
}

const date = Date()
console.log('date',date)


const newDate = new Date(2000,1,10,11,55,5,5000)
console.log(newDate.getMonth)
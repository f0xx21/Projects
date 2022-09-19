class Comment {
  constructor(text){
  this.text = text
  this.votes = 0
}

upvote(){
  this.votes +=1
}
static mergeComments(first,second){
  return `${first} ${second}`
}
}
 
const firstComment = new Comment('first comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

class NumbersArray extends Array {
  sum(){
    return this.reduce((el,acc)=> acc += el,0)
  }
}

const myArray = new NumbersArray(2,5,7)






// for (let i = 0; i < newArray1.length; i+= 1){
//   if (i === 0){
//     console.log('nol!')
//   }
//   if (i === 1){
//     console.log('odin!')
//   }if(i === 2){
//     console.log('dva!')
//   }if(i=== 3){
//     console.log('tri!')
//   }
//   console.log(i)
// }

// let sum = (a,b) => {
//    sum = a + b 
//    console.log(sum)
// }

// sum(5,100)

// const coffees = ['Latte','Capuccino','Americano']
// numbers = [1,2,3]
// const requestCoffee = prompt('Поиск кофе по названию')
// if(requestCoffee === 'Latte'){
//   console.log(`Держите ваш любимый кофе он ${numbers[1]} по популярности`)
// }if(requestCoffee === 'Capuccino'){
//   console.log(`Держите ваш любимый кофе он ${numbers[2]} по популярности`)
// }if(requestCoffee === 'Americano'){
//   console.log(`Держите ваш любимый кофе он ${numbers[3]} по популярности`)
// }else{
//   console.log('К сожалению такого вида кофе нет в наличии')
// }

// const newArray1 = ['Arshak','Vazgen','Timur','Hasan']

// const getSumOfSequence = (number) => {
//   let massive1 = []
//   for (i = 0; i < number; i += 1){
//     massive1.push(i)
//     console.log(i)
//   }
//   return massive1[0] + massive1[massive1.length -1]
// }

// getSumOfSequence(8)

// newArray1.push(2)
// newArray1.unshift(100)



// for (i = 0; i < newArray1.length; i+= 1){
//   console.log(i)
//   console.log(newArray1[i])
}
// function Animal (name) {
// this.name = name

// this.getName = function() {
//     return this.name

//     }
// }


// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     getName(){
//         return this.name
//     }
// }



// //new
// const result = new Animal('Kot')
// const dog = new Animal('Dog')
// console.log(dog)

// // console.log(result.name)

// // console.log(result.getName())



//наследование

class Plane {
    constructor(type,passagensers){
        this.type = type
        this.passagensers = passagensers
    }

    start(){
        console.log('Go!')
    }

    
}


class MilitaryPlane extends Plane {
    constructor(type){
        super(type,0) // вызывает конструктор родительского класса
        this.numberOfGuns = 0
    }
    startFlight(){
        console.log('go to peace!')
    }

    setNumberOfGuns(numberOfGuns){
        this.numberOfGuns = numberOfGuns
    }
    shoot(){
        console.log('transormation!')
    }
}




// const plane = new Plane('military',100)
// console.log(plane)


const militaryPLane = new MilitaryPlane('military')
console.log(militaryPLane)

militaryPLane.start()

militaryPLane.setNumberOfGuns(4)
militaryPLane.shoot()
console.log(militaryPLane)

console.log(militaryPLane instanceof MilitaryPlane)

//инкапсуляция
//полиморфизм
//абстракция

class Photographer {
    constructor (man,type){
        this.man = man
        this.type = type
    }

    start(){
        console.log('j!')
    }
}

class Developer {
#salary

    constructor(name,programmingLanguage){
    this.name = name
    this.programmingLanguage = programmingLanguage
    this.salary = 3000
}

get devsalary(){
    return this.salary
}


startCoding(){
    console.log('Start writing code')
}

print(){
    console.log(`Langiage ${this.programmingLanguage}`)
}

}

class JuniorDeveloper extends Developer{
    constructor(name,programmingLanguage){
        super(name,programmingLanguage)
    }
}

const juniorDeveloper = new JuniorDeveloper('Art','Java')
juniorDeveloper.name



const developer = new Developer(`Artur`,`JavaScript`)
console.log(developer)
console.log(developer.name)
console.log(developer.programmingLanguage)
developer.startCoding()
console.log(developer.devsalary)

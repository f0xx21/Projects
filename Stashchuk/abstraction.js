//abstractions

class Footballer{
    constructor(name,club){
        this.name = name
        this.club = club
    }

    shoot() {}
    celebration() {}
    pass() {}
}

class Forward extends Footballer{
    constructor(name,club){
        super(name,club)
    }
    
    shoot() {
        console.log('Shoot')
    }
    celebration() {
        console.log('Yahai')
    }
    pass() {
        console.log('Srednepas')
    }
}

class Car {

    static isCar(car){
        return car instanceof Car
    }

static initialParams = {
    name: "Lada",
    maxSpeed: 150,
}

    constructor(name,maxSpeed){
        this.name = name || Car.initialParams.name
        this.maxSpeed = maxSpeed || Car.initialParams.maxSpeed
    }

    drive(){
        console.log(`Car ${this.name} on the way`)
    }
}

const car = new Car ()
const isCar =  Car.isCar(car)
console.log(car)
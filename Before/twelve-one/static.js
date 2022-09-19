class Car {
    static isCar(car){
        return car instanceof Car
    }

    static initalParams = {
        name:`Audi`,
        maxSpeed:150,
    }

    constructor(name,maxSpeed){
        this.name = name || Car.initalParams.name
        this.maxSpeed = maxSpeed || Car.initalParams.maxSpeed
    }
drive(){
    console.log(`car ${this.name} on the way`)
}
}

const car = new Car()
console.log(car)
const animal = {}
const isCar = Car.isCar(car)


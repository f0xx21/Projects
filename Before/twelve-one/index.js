// // this - object

// console.log(this)

// const user = {
//     name:`Artem`,
//     dateOfBirth: 1989,
//     getname(){
//         return this.name
//     },
// calculateAge(){
//     const currentYear = new Date().getFullYear()
//     return currentYear - this.dateOfBirth
// },
// getAllInfo: function() {
//     const age = this.calculateAge()
//     console.log(`Name:,${this.name},age ${age}`)
// }
// }
// console.log(user.calculateAge())
// user.getAllInfo()

// //bind,call, apply


// const user2 ={
//     name:`Dmitry`
// }
// const user2Name = user.getname.call(user2)
// console.log(user2Name)


// let student = {
//     stack: [`HTML`],
//     level: 1,
//     improveLevel() {
//         this.level += 1
//     if(this.level === 2) {
//         this.stack.push(`CSS`)
//     }else if (this.level === 3) {
//         this.stack.push(`JavaScript`)
//     }else if (this.level === 4){
//         this.stack.push (`React`)
//     }else if (this.level === 5){
//         this.stack.push (`NodeJS`)
//     }else {
//         console.log(`Студент выучил все технологии`)
//         console.log(this)
//     }
//     return this
//     }
// }

// student
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()

// const dog = {
//     name: 'Чарли',
//     type: 'Собака',
//     makeSound(){
//         return 'Гав-гав'
//     }
// }

// const bird = {
//     name:'Петя',
//     type:'Воробей',
//     makeSound() {
//         return 'Чирик-чирик'
//     }
// }
// function makeDomestic(isDomestic) {
//     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//     return {
//         ...this,
//         isDomestic,
//     }
// }

// makeDomestic.bind(dog, true)();

// makeDomestic.apply(bird, [true]);
// makeDomestic.call(bird, false);


// const footballer = {
//     fullName: 'Cristiano Ronaldo',
//     attack: function() {
//         console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//     },
//     scoreGoal(sound) {
//         console.log(`${this.fullName} забил гол! Вот это да!`);
//         this.celebrate(sound);
//     },
//     celebrate(sound) {
//         console.log(sound);
//     },
//     goToSubstitution: function(newPlayer) {
//         console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
//     }
// }

// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// attack.bind(footballer)();
// score.call(footballer, 'Сиииии');
// substitute.apply(footballer, ['Paulo Dibala']);

//ООП

//function and class

// function Animal(name) {
//     this.name = name

//     this.getName = function(){
//         return this.name
//     }
// }

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }


// //new
// const  cat = new Animal(`Cat`)
// const dog = new Animal(`Dog`)

// // console.log(`cat`,cat)
// // console.log(cat.name)
// // console.log(cat.getName())
// console.log(dog)


// class Person{
//     constructor (name,age){
//         this.name = name
//         this.age = age
    
//     }
  
//     compareAge(person){
//         if (this.age > person.age){
//             console.log(`${this.name} старше, чем ${person.name}`)
//         }else{
//             console.log(`${this.name}, младше, чем ${person.name}`)
//         }
//     }
// }      

// let person1 = new Person(`Максим`,24)
// let person2 = new Person(`Светлана`,36)
// let person3 = new Person('Ирина',23)

// person1.compareAge(person2)
// person2.compareAge(person3)
// person3.compareAge(person1)

// class User{
//     constructor(name){
//         this.name = name
//     }
//     sayHi(){
//         alert(this.name)
//     }
// }
// let user = new User(`Ruslan`)
// user.sayHi()

//inherit

// class Plane {
//     constructor(type,numberOfPassangers){
//     this.type = type
//     this.numberOfPassangers = numberOfPassangers
// }
// startFlight(){
//     console.log(`Fly!`)
// }

// }

// class MilitaryPlane extends Plane{
//     constructor(type){
//         super(type,0)
//         this.numberOfGuns = 0
//     }
// startFlight(){
//     console.log(`Attack!`)
// }
// setNumberOfGuns(numberOfGuns){
//     this.numberOfGuns = numberOfGuns
// }
// shoot(){
//     console.log(`Shooting!`)
// }
// } 



// // const plane = new Plane(`Passangers`,100)
// // console.log(plane)
// // plane.startFlight()

// const militaryPlane = new MilitaryPlane(`military`)
// console.log(militaryPlane)

// militaryPlane.startFlight()
// militaryPlane.shoot()

// //instanceof
// class dog{}

// console.log(militaryPlane instanceof dog)

// class Dictionary  {
//     constructor (name){
//         this.name = name,
//         this.words = {}
//     }

//     add(word,description) {
//         if (!this.words[word]){
//             this.words[word] = {
//                 word,
//                 description,
//             }
//         }
//     }

//     remove(word) {
//     delete this.words[word]
// }
//     get() {
//     return this.words[word]
// }
//     showAllWords() {
//         Object.values(this.words).forEach ((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`)
//     })
         
//     }
// }
// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name);
//     }

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//                 isDifficult: true,
//             }
//         }
//     }
// }
// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

// hardWordsDictionary.remove('неологизм');
// hardWordsDictionary.showAllWords();

//Инкапсуляция
//public available everywhere
//#privat available only in class
class Developer {
    #salary
    constructor(name,programmingLanguage){
        this.name = name
        this.programmingLanguage = programmingLanguage
        this.#salary = 3000
    }

    get devSalary() {
        return this.#salary
    }

    set setSalary(salary) {
        return this.#salary = salary
    }

    startCoding() {
    this.printProgrammingLanguage()
    console.log(this.#salary)    
    console.log(`${this.name} start codding`)
    }

printProgrammingLanguage() {
    console.log(`Language: ${this.printProgrammingLanguage}`)
    }

}

class JuniorDeveloper extends Developer{
    constructor(name,programmingLanguage){
        super(name,programmingLanguage)
    }
}

const juniorDeveloper = new JuniorDeveloper(`Igor`, 'JavaScript')
juniorDeveloper.printProgrammingLanguage()

const developer = new Developer(`Maxim`, `JavaScript`)
console.log(developer.devSalary)
developer.setSalary = 5000
console.log(developer.devSalary)
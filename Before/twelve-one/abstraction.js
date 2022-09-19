// Абстракция

class Footballer {
    constructor(name,club){
        this.name = name
        this.club = club
    }
shoot() {}
celebrateGoal() {}
pass() {}
}


class Forward extends Footballer{
    constructor(name,club){
        super(name,club)
    }
    shoot(){
        console.log(`very strong pucnh`)
    }
    celebrateGoal(){
        console.log(`yes!`)
    }
    pass(){
        console.log(`middle pass`)
    }
}
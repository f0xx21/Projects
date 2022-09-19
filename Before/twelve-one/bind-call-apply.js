const mainHero = {
    fullName:`SpiderMan`,
    health:65,
    strength:5,
}

const badHero = {
    fullName:`Joker`,
    healt: 55,
    strength:10,
}

function printHeroInfo(extraInfo = '') {
    console.log(this)
    console.log(`name ${this.fullName} Health ${this.healt} str ${this.strength}, ${extraInfo}`)
}

//bind,call,apply
printHeroInfo.call(badHero) 
printHeroInfo.apply(badHero,['his role:is evil'])

const bindedPrintHeroInfo = printHeroInfo.bind(mainHero,'his rule: main')
bindedPrintHeroInfo()
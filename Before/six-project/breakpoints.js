const developerName = `Maxim`
const programminLanguage = `JavaScript`

const programminLanguages = {
javaScript: `JavaScript`,
nodeJS: `NodeJS`,
}
if (programminLanguage === programminLanguages.javaScript){
    console.log(`${developerName} является Frontend разработчиком`)
} else if (programminLanguage === programminLanguages.nodeJS) {
console.log(`${developerName} является Backend разработчиком `)
} else {
    console.log(`Язык у ${developerName} не определен`)
}

const photographer = `Ruslan`
// const camera = `Nikon`

const dopusk = {
    camera: `Nikon`,
    name: `Ruslan`,
}
if(photographer === dopusk.camera){
    console.log(`Подходит`)
}else if (photographer === dopusk.name){
    console.log(`Это Русик`)
}else{
    console.log(`Уходи`)
}
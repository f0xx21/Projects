

const users = [ {
    username:`David`,
    status:`online`,
    lastActivity:10
    },
    {
    username:`Lucy`,
    status:`offline`,
    lastActivity:22
    },
    {
    username:`Bob`,
    status:`online`,
    lastActivity:104

    }
]

let peopleOnline =  users.filter((person)=> person.status === `online`) 
let peopleOnlineNames = peopleOnline.map((person) => person.username).join(`, `)
console.log(`Сейчас онлайн следующие пользователи: ${peopleOnlineNames}`)

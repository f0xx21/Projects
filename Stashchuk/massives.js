const animal = 'Lion'
console.log(animal.toLowerCase())

console.log(animal.indexOf('i'))

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, 
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, 
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
 ]


 console.log(users.username)
 userOnline = users.filter((person) => {
person.status === 'online'
 })
 let peopleOnlineNames = userOnline.map((person) => person.username).join(`, `)
console.log(`Сейчас онлайн следующие пользователи: ${peopleOnlineNames}`)



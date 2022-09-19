

function getKiller(suspectInfo,deadPeople){
    let killerName = ``
Object.entries(suspectInfo).forEach((data) =>{
    let suspecPerson = data[0]
    let peopleWhereSeen = data[1]
    let killer = deadPeople.every((deadName)=> peopleWhereSeen.includes(deadName))
    if (killer){
        killerName = suspecPerson
    }
})
return killerName
}
getKiller()
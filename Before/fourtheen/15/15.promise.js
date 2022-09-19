//promise 




//peding  - waiting, fulfilled - sucess, rejected - error


const developer = {
    name: 'Oleg',
    isJSDev: true,
}



const promise = new Promise((resolve,reject)=>{
    if(developer.isJSDev){
        setTimeout(() => {
            resolve(`${developer.name} JS Developer`)
        },2000);
    }else{
        reject(`${developer.name} is not JS Developer`)
    }
})

console.log(promise)

//then, catch, finally

promise
.then((sucessMessage)=>{
console.log(`sucessMessage:`,sucessMessage)
})
.catch((error)=>{
console.log(`error`,error)
})
.finally(()=>{
    console.log('finally')
})
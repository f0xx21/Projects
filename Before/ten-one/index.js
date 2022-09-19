const developer = {
    //key:value
    name: `Ignat`,
    job: `Front-end developer`,
    experience: 24,
    jobAllInfo:{
        type:`Front-end`,
        framework: `ReactJS`
    }
}

console.log(`type`,developer.jobAllInfo.type)
console.log(`framework`,developer[`jobAllInfo`][`framework`])



// console.log(developer)

// //1
// console.log(`name`,developer.name)
// console.log(`jobAllInfo`,developer.jobAllInfo)

// //2
// const key = `name`

// console.log(`name`,developer[key])

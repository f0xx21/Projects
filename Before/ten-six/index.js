const developer = {
    name:`Maxim`,
    job:`Front-end developer`,
    experience: 24,
    jobAllInfo: {
        type:`Front-end`,
        framework: {
            name:`ReactJS`
        }

    }
}

// console.log(developer.jobAllInfo.framework)

if(developer && developer.jobAllInfo && developer.jobAllInfo.framework ){
    console.log(`developer already know framework`)
}else{
    console.log(`developer already not know framework`)
}

if(developer?.jobAllInfo?.framework?.name){
    console.log(`developer already know framework`)
}else{
    console.log(`developer already not know framework`)
}

const student = {
    id: 1,
    programingLanguage:`JavaScript`,
    hasExperienceInReact: false,

}

//add 
student.experience = 6
student.rusik = true
student.age = 29


//delete

delete student.hasExperienceInReact

delete student.rusik
console.log(`student`,student)

//edit

student.experience = 12
student.id = 2
console.log(`student`,student)

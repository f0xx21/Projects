const student = {
    fullName: `Максим`,
    expirienceInMonth: 12,
    stack: [`HTML`,`CSS`,`JavaScript`,`React`]
}
const updateStudent = giveJobToStudent(student,`веб-разработчик`) 
    

function giveJobToStudent() {
    student.jobName = 'веб-разработчик'
    console.log(`Поздарвляем, у сутдента ${student.fullName} появилась новая работа, теперь он ${student.jobName}.`)
}
console.log(student)
giveJobToStudent()
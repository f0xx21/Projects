let existedUserLogin = 'the_best_user'
let existedUserPassword = 12345678

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите Пароль').trim()

if(existedUserLogin === userLogin ) {
    alert(` Добро пожаловать!, ${userLogin}`)
}else{
    alert('Логин и (или) Пароль введены неверно!')
}



    
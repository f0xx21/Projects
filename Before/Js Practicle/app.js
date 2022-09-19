// let admin, name
// name = 'John'
// admin = name
// alert(admin)


// let age
// let currentYear
// age = 31;
// currentYear = 2021;
// let seconds,minutes,hours;
// seconds = 60;
// minutes = 60;
// hours = 24;
// let minutesPerhours;
// minutesPerhours = (hours / minutes);


// alert(`${seconds + minutes}`);

// создает функцию
function ChangeColor(Element) {
	if (Element.style.color == 'green') Element.style.color = 'red';
	else Element.style.color = 'green';
	return false;
}
window.onload = function () {

    //получаем идентификатор элемента
   let a = document.getElementById('switch');
    
    //вешаем на него событие
    a.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='On') this.innerHTML = 'Off';
        else this.innerHTML = 'On';
        //предотвращаем переход по ссылке href
        return false;
    }
}


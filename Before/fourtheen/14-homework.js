document.body.innerHTML = `
       <form class="create-user-form">
       <label>
           Имя
           <input type="text" name="userName" placeholder="Введите ваше имя" />
       </label>
       <label>
           Пароль
           <input type="password" id ="input1" name="password" placeholder="Придумайте Пароль" />
       </label>
       <button type="submit">
           Подтвердить
       </button>
   </form>`


const confirmButton = document.querySelector('[type=submit]')

confirmButton.style.color = 'red'
confirmButton.style.fontSize = '20px'
confirmButton.style.marginTop = '50px'
confirmButton.style.boxShadow = '5px 5px 15px 12px #000000' 



console.log(confirmButton)

const createUserForm = document.querySelector('.create-user-form')  

const  input = createUserForm.querySelector('[type = password]')


input.onclick = function() {
   confirm('op')
   if (this.confirm = true ){
       console.log('yahai!')
   }
      
}

  


// const createInputWithLabel = (
//     label, inputType, inputName, placeholder,
// ) => {
//     const labelContainer = document.createElement('label');
//     labelContainer.innerText = label;

//     const inputElement = document.createElement('input');
//     inputElement.type = inputType;
//     inputElement.name = inputName;
//     inputElement.placeholder = placeholder;

//     labelContainer.append(inputElement);

//     return labelContainer;
// };

// console.log(createInputWithLabel())

// const formContainer = document.createElement('form');
// formContainer.className = 'create-user-form';
// const userNameLabel = createInputWithLabel(
//     'Имя', 'text', 'userName', 'Введите ваше имя',
// );
// const passwordLabel = createInputWithLabel(
//     'Пароль', 'password', 'password', 'Придумайте Пароль',
// );
// const confirmButton = document.createElement('button');
// confirmButton.type = 'submit';
// confirmButton.innerText = 'Подтвердить';

// formContainer.append(userNameLabel, passwordLabel, confirmButton);
// document.body.prepend(formContainer);


// const form1 = document.querySelector('[input]')

// console.log(form1)
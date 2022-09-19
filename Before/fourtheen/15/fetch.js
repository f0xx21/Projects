


//fetch(url)

//get,post,delete

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const createTodoElement = (text) => {
    const todoElement = document.createElement('li')
    const toDoElementAnchor = document.createElement('a')
    toDoElementAnchor.href = '#'
    toDoElementAnchor.textContent = text
   todoElement.append(toDoElementAnchor)

    return todoElement
}


const toggleLoader = () => {
const loaderHTML = document.querySelector('#loader')
const isHidden = loaderHTML.hasAttribute('hidden')
if(isHidden){
    loaderHTML.removeAttribute('hidden')
}else{
    loaderHTML.setAttribute('hidden','')
}
}



const dataContainer = document.querySelector('#data-container')


const getAllTodos = () => {
toggleLoader()
    const result = fetch(TODOS_URL,{
        method: 'GET'
        }) 
        
        console.log(`result`,result)
        
        result
        .then((responce) => {
            console.log(responce)
            if(!responce.ok){
                throw new Error('Ошибка запроса брат')
            }
            return responce.json()
        })
        .then((todos) => {
            
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title)
                dataContainer.append(todoHTML)
            });
        console.log(`todos`,todos)
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(()=>{
            toggleLoader()
        })

}

getAllTodos()




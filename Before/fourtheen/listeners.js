// document.addEventListener('keydown',(e) => {
//     const {key} = e
//     console.log(e)
//     const taskItemDelete = document.querySelector(`[data-task-id="${key}"]`)
//     if (taskItemDelete){
//         const confirmDelete = confirm(`Are you shure?`)
//      if (confirmDelete){
//         taskItemDelete.remove()
//     }
// }
// }) 


// document.addEventListener('keyup', (e) => {
//     const {key} = e
//     console.log(e)
//     const taskItemDelete = document.querySelector(`[data-task-id="${key}"]`)
//     if (taskItemDelete){
//         taskItemDelete.remove()
//     }
// })

//mouseover


// const createTooltip = (text) =>{
//     const tooltip = document.createElement('span')
//     tooltip.textContent = text
//     tooltip.className = 'tooltip'
//     return tooltip
// }

// document.addEventListener('mouseover', (e)=> {
//     const { target } = e
//         const isOverDeleteButton = target.className.includes('task-item__delete-button')
//     if (isOverDeleteButton){
//         console.log('sucess')
//         const taskItemHTML = target.closest('.task-item')
//         const taskId = taskItemHTML?.dataset.taskId
//         if(taskId){
//             const toolTipHTML = createTooltip(`Delete button ${taskId}?`)
//             target.append(toolTipHTML)
//         }
//     }
// })

// document.addEventListener('mouseout', (e)=>{
//     const {target} = e
//     const lostTarget = target.closest('.task-item')
//     if (lostTarget){
//         const tooltip = document.querySelector('.tooltip')
//        if (tooltip) {
//            tooltip.remove()
//        }
//     }
// })


const body = document.querySelector('body')


const buttonSwitch = document.createElement('button')
buttonSwitch.type = 'chekbox'
buttonSwitch.textContent = 'Night'
buttonSwitch.addEventListener('click',(e)=>{
    body.style.backgroundColor = 'black'
})

const buttonSwitch2 = document.createElement('button')
buttonSwitch2.style.type = 'radio'
buttonSwitch2.textContent = 'Day'
buttonSwitch2.addEventListener('click',(e)=>{
    body.style.backgroundColor = 'white'})

body.appendChild(buttonSwitch)
body.appendChild(buttonSwitch2)


// document.addEventListener('keydown',(e)=>{
//     console.log(e)
// })

document.addEventListener('kedown',(e)=>{
    
    const {target} = e
   
  
})

const newItem = document.createElement('div')
newItem.classList.add('.two','.one')
newItem.textContent = 'div'
newItem.style.fontSize = '40px'
newItem.style.marginTop = '40px'
newItem.style.marginLeft = '40px'
// body.appendChild(newItem)
body.insertAdjacentElement('afterend',newItem)

// document.addEventListener('mouseover',(e)=>{
//   const {target} = e
//  console.log(target)
// })

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
})



const one = document.querySelector('.one')
one.style.width = '150px'
one.style.display = 'block'
one.style.marginLeft = 'auto'
one.style.marginRight = 'auto'


one.style.paddingBottom = '30px'


one.classList.add('two','three')

const toggle = document.querySelector('.toggle');
toggle.onclick = () => {
    this.classList.toggle('three')
}


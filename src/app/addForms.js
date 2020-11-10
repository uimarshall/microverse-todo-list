    import contentCreator from "../helpers/contentCreator";
    

    export default function addTodos(){
        alert('Hello')
   const form = document.createElement('form')
    let inputWrapper = document.createElement('div')
    inputWrapper.classList.add('form-control')
    let inputField = document.createElement('input[type="text"]')
    inputField.setAttribute("placeholder", "project")
    inputField.classList.add('todo-input')
    inputWrapper.appendChild(inputField)
    form.appendChild(inputWrapper)


    let inputWrapper2 = document.createElement('div')
    inputWrapper2.classList.add('form-control')
    let inputField2 = document.createElement('input[type="text"]')
    inputField2.setAttribute("placeholder", "title")
    inputField2.classList.add('todo-input')
    inputWrapper2.appendChild(inputField2)
    form.appendChild(inputWrapper2)

    // textarea
    let inputWrapper3 = document.createElement('div')
    inputWrapper3.classList.add('form-control')
    let textarea = document.createElement('textarea')
    
    textarea.classList.add('desc')
    inputWrapper3.appendChild(textarea)
    form.append(inputWrapper3)

    // checkbox
    let textBoxWrapper = document.createElement('div')
    textBoxWrapper.classList.add('form-control')
    let textBoxField = document.createElement('input[type="checkbox"]')
    textBoxField.setAttribute("type", "checkbox")
    textBoxField.classList.add('completed')
    textBoxWrapper.appendChild(textBoxField)
    form.appendChild(textBoxWrapper)

    // select field
   const menuOptions = ["low", "medium", "high"]
   let selectField = contentCreator.selectMenu(menuOptions)
   form.appendChild(selectField)

//    Submit 
let submitWrapper = document.createElement('div')
    submitWrapper.classList.add('form-control')
    let submitBtn = document.createElement('input[type="submit"]')
    submitBtn.value = "Add Todos"
    
    submitWrapper.appendChild(submitBtn)

    form.appendChild(submitWrapper)
    form.classList.add('default');
const
    return form;


    }
    
    

    
    
    
    
   
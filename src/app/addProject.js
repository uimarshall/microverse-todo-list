import contentCreator from "../helpers/contentCreator";


export default function addProject(){
   const form = document.createElement('form')

   const inputWrapper = contentCreator.withText('div', '', 'form-group')
   const inputField = contentCreator.withoutLabel('input', 'text', 'Project Title', 'todo-input')
    inputField.classList.add('form-control')
   inputWrapper.appendChild(inputField)
   form.appendChild(inputWrapper)


   // const submitWrapper = contentCreator.withText('div', '', 'form-control')
   const submitBtn = contentCreator.withoutLabel('input', 'submit', '', 'compconsted')
   submitBtn.classList.add('btn', 'btn-info', 'my-3')
   submitBtn.value = "Add Project"
   submitBtn.onclick = (e) => {
      if(localStorage[inputField.value]){
         e.preventDefault()
         alert('This project exists')
      } else {
         localStorage.setItem(`${inputField.value}`, "")
      }
   }
   // submitWrapper.appendChild(submitBtn)
   // form.appendChild(submitWrapper)
   form.appendChild(submitBtn)

   form.classList.add('default');

   return form;


    }

import contentCreator from "../helpers/contentCreator";

function alertMessage(e){
  e.preventDefault()
  const header = document.querySelector('header')
  const alert = document.querySelector('.validation-alert')
  if(alert){ header.removeChild(alert) }
  header.appendChild(contentCreator.withText('p', 'This Project Already Exists!', 'validation-alert'))
}

function validateProjectName(e, projectName){
  if(localStorage[projectName] != undefined){
    alertMessage(e)
  } else {
     localStorage.setItem(`${projectName}`, "")
  }
}

export default function addProject(){
   const form = document.createElement('form')

   const inputWrapper = contentCreator.withText('div', '', 'form-control')
   const inputField = contentCreator.withoutLabel('input', 'text', 'Project Title', 'todo-input')
   inputWrapper.appendChild(inputField)
   form.appendChild(inputWrapper)


   const submitWrapper = contentCreator.withText('div', '', 'form-control')
   const submitBtn = contentCreator.withoutLabel('input', 'submit', '', 'compconsted')
   submitBtn.value = "Add Project"
   submitBtn.onclick = (e) => {
      validateProjectName(e, inputField.value)
   }
   submitWrapper.appendChild(submitBtn)
   form.appendChild(submitWrapper)

   form.classList.add('default');

   return form;


    }

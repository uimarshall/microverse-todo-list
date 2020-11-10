import contentCreator from "../helpers/contentCreator";


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
         e.preventDefault()
   // alert(inputField.value)
   localStorage.projectList[] = inputField.value
         // localStorage[`${inputField.value}`]['title'] = inputField.value
         // alert(inputField.value)
         // alert(inputField2.value)
         // alert(textarea.value)
         // alert(textBoxField.checked)
         // alert(selectField.value)
      }
   submitWrapper.appendChild(submitBtn)
   form.appendChild(submitWrapper)

   form.classList.add('default');

   return form;


    }

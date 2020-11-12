import contentCreator from "../helpers/contentCreator";
import {validateProjectName} from '../helpers/library'

export default function addProject(){
   const form = document.createElement('form')

   const inputWrapper = contentCreator.withText('div', '', 'form-group')
   const inputField = contentCreator.withoutLabel('input', 'text', 'Project Title', 'todo-input')
    inputField.classList.add('form-control')
   inputWrapper.appendChild(inputField)
   form.appendChild(inputWrapper)


   const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', "Add Project", '', 'compconsted')
   submitBtn.classList.add('btn', 'btn-info', 'my-3')
   submitBtn.onclick = (e) => {
      validateProjectName(e, inputField.value)
   }
   form.appendChild(submitBtn)

   form.classList.add('default');

   return form;


    }

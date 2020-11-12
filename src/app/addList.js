import contentCreator from "../helpers/contentCreator";
import { addToStorage, withProjects } from '../helpers/library'
import toDoItem from './createList'


export default function addTodos(){
  const form = document.createElement('form')

   const inputWrapper = contentCreator.withText('div', '', 'form-group')
   const projectSelect = contentCreator.selectMenu(withProjects([]))
   projectSelect.classList.add('form-control')
   inputWrapper.appendChild(projectSelect)
   form.appendChild(inputWrapper)

    const inputWrapper2 = contentCreator.withText('div', '', 'form-group')
    const inputField2 = contentCreator.withoutLabel('input', 'text', 'title', 'todo-input')
    inputField2.classList.add('form-control')
    inputWrapper2.appendChild(inputField2)
    form.appendChild(inputWrapper2)

    const inputWrapper3 = contentCreator.withText('div', '', 'form-group')

    const textarea = contentCreator.withText('textarea', '', 'desc')
    textarea.classList.add('form-control')
    textarea.setAttribute('placeholder', 'Enter Description')
    inputWrapper3.appendChild(textarea)


    form.append(inputWrapper3)

    const textBoxWrapper = contentCreator.withText('div', '', 'form-check')
    const textBoxField = contentCreator.withLabel('input', 'checkbox', '', 'compconsted', 'completed')
    textBoxWrapper.appendChild(textBoxField)
    form.appendChild(textBoxWrapper)

   const menuOptions = ["low", "medium", "high"]
   const selectField = contentCreator.selectMenu(menuOptions)
   selectField.classList.add('form-control')
   form.appendChild(selectField)

   const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', "Add ToDo", '', 'compconsted')
   submitBtn.classList.add('btn', 'btn-info', 'my-3')
   submitBtn.onclick = () => {
      let list = {
        title: inputField2.value,
        description: textarea.value,
        completed: textBoxField.checked,
        priority: selectField.value,
      }
      addToStorage(projectSelect.value, list)
   }

   form.appendChild(submitBtn)

   form.classList.add('default');

   return form;


    }

import contentCreator from "../helpers/contentCreator";


export default function addTodos(){
   const form = document.createElement('form')

    const inputWrapper = contentCreator.withText('div', '', 'form-control')
    const inputField = contentCreator.withoutLabel('input', 'text', 'project', 'todo-input')
    inputWrapper.appendChild(inputField)
    form.appendChild(inputWrapper)

    const inputWrapper2 = contentCreator.withText('div', '', 'form-control')
    const inputField2 = contentCreator.withoutLabel('input', 'text', 'title', 'todo-input')
    inputWrapper2.appendChild(inputField2)
    form.appendChild(inputWrapper2)

    const inputWrapper3 = contentCreator.withText('div', '', 'form-control')
    const textarea =  contentCreator.withText('textarea', '', 'desc')
    inputWrapper3.appendChild(textarea)
    form.append(inputWrapper3)

    const textBoxWrapper = contentCreator.withText('div', '', 'form-control')
    const textBoxField = contentCreator.withoutLabel('input', 'checkbox', '', 'compconsted')
    textBoxWrapper.appendChild(textBoxField)
    form.appendChild(textBoxWrapper)

   const menuOptions = ["low", "medium", "high"]
   const selectField = contentCreator.selectMenu(menuOptions)
   form.appendChild(selectField)

   const submitWrapper = contentCreator.withText('div', '', 'form-control')
   const submitBtn = contentCreator.withoutLabel('input', 'submit', '', 'compconsted')
   submitBtn.value = "Add Todos"
   submitBtn.onclick = (e) => {
      let list = {
          title: inputField2.value,
          description: textarea.value,
          completed: textBoxField.checked,
          priority: selectField.value,
      }

      localStorage.setItem(`${inputField.value}`, JSON.stringify(list))

   }
   submitWrapper.appendChild(submitBtn)
   form.appendChild(submitWrapper)

   form.classList.add('default');

   return form;


    }

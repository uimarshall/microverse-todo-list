import contentCreator from "../helpers/contentCreator";

function addToStorage(project, list){
   // alert(project)
   // alert(list)
   // alert(JSON.parse(localStorage[project]))
   // alert(JSON.stringify(list))
   // localStorage[project] = JSON.stringify(list)
   const listItems = localStorage[project]
   alert(listItems + JSON.stringify(list))
   // localStorage[project][list.title] = list
   // localStorage.setItem(`${inputField.value}`, {`${list.title}`: list})
   // alert(test)
   // test.setItem(`${list.title}`, list)
   // alert(test.title)
   // alert(test[list.title])
   // alert(listItems)
   // listArr.push(list)
   // alert(listArr)
   localStorage[project] = listItems + JSON.stringify(list)
}

export default function addTodos(){
   const form = document.createElement('form')

    const inputWrapper = contentCreator.withText('div', '', 'form-control')
    const projects = []
    for(let i = 0; i < localStorage.length; i += 1){
      if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
         projects.push(localStorage.key(i))
      }
   }
   const projectSelect = contentCreator.selectMenu(projects)
    inputWrapper.appendChild(projectSelect)
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
    const textBoxField = contentCreator.withLabel('input', 'checkbox', '', 'compconsted', 'completed')
    textBoxWrapper.appendChild(textBoxField)
    form.appendChild(textBoxWrapper)

   const menuOptions = ["low", "medium", "high"]
   const selectField = contentCreator.selectMenu(menuOptions)
   form.appendChild(selectField)

   const submitWrapper = contentCreator.withText('div', '', 'form-control')
   const submitBtn = contentCreator.withoutLabel('input', 'submit', '', 'compconsted')
   submitBtn.value = "Add Todos"
   submitBtn.onclick = (e) => {
      e.preventDefault()

      let list = {
          title: inputField2.value,
          description: textarea.value,
          completed: textBoxField.checked,
          priority: selectField.value,
      }
      addToStorage(projectSelect.value, list)
   }
   submitWrapper.appendChild(submitBtn)
   form.appendChild(submitWrapper)

   form.classList.add('default');

   return form;


    }

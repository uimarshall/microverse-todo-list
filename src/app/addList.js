import contentCreator from "../helpers/contentCreator";


export default function addTodos(){
   const form = document.createElement('form')

    const inputWrapper = contentCreator.withText('div', '', 'form-control')
    // const inputField = contentCreator.withoutLabel('input', 'text', 'project', 'todo-input')
    const projects = []
    for(let i = 0; i < localStorage.length; i += 1){
      if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
         projects.push(localStorage.key(i))
      }
   }
    const inputField = contentCreator.selectMenu(projects)
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
   submitBtn.onclick = () => {
      let list = {
          title: inputField2.value,
          description: textarea.value,
          completed: textBoxField.checked,
          priority: selectField.value,
      }
      let listItems = []
      for(let i = 0; i < localStorage.length; i += 1){
         // alert(localStorage.key(i) == 'P1')

         if(localStorage.key(i) == inputField.value){
            const test = JSON.parse(localStorage[localStorage.key(i)])
            // test = JSON.stringify(list)
            alert(typeof list)
         }
      }
      // if(localStorage[inputField.value]){
      //    // const storageItem = localStorage[inputField.value]
      //    const storageItem = localStorage[inputField.value]
      //    alert(JSON.parse(storageItem))
      //     // JSON.parse(localStorage[`${inputField.value}`])
      //    // alert(JSON.parse(storageItem))
      //    listItems.push(JSON.parse(storageItem))
      //    // alert(storageItem)
      // }

     // const storageItem = JSON.parse(localStorage[inputField.value])
     // const listItems = [...storageItem]
     // alert(storageItem)
     // if(localStorage.length != 0){
     //    listItems.push(storageItem)
     // }
     listItems.push(list)
     // alert(listItems)
     localStorage.setItem(`${inputField.value}`, JSON.stringify(listItems))

   }
   submitWrapper.appendChild(submitBtn)
   form.appendChild(submitWrapper)

   form.classList.add('default');

   return form;


    }

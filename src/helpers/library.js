import contentCreator from './contentCreator';

function clearContent(content){
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function createDefaultProject(){
  if (!localStorage['Default Project']){
    localStorage['Default Project'] = '';
  }
}

function displayProjectNames(leftSide){
  const body = document.querySelector('body')
  for(let i = 0; i < localStorage.length; i += 1){
    if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
      const project = contentCreator.withText('ul', localStorage.key(i), 'projectListItem')
      const projectsStored = localStorage[localStorage.key(i)]
      getToDoTitles(body, project, projectsStored.split("|"), i)

      leftSide.appendChild(project);
    }
  }
}

function displayList(currentList){
  const list = JSON.parse(currentList)
  const thisList = contentCreator.withValue('ul', `Title: ${list.title}`, `${list.title}`)
  thisList.appendChild(contentCreator.withText('li', `Description:    ${list.description}`))
  thisList.appendChild(contentCreator.withText('li', `Completed:  ${list.completed}`))
  thisList.appendChild(contentCreator.withText('li', `Priority:   ${list.priority}`))

  return thisList
}

function printList(list, displayContainer, forThisProject, i, project, body, projArr){
    const thisList = displayList(forThisProject)
    const deleteBtn = contentCreator.withText('li', 'Delete')
    deleteBtn.onclick = () => {
         projArr.splice(projArr.indexOf(forThisProject), 1)
         localStorage[localStorage.key(i)] = projArr.join('|')
         project.removeChild(list)
         clearContent(thisList)
         body.removeChild(displayContainer)
    }
    thisList.appendChild(deleteBtn)
    displayContainer.appendChild(thisList)
}

function displayTodos(body, forThisProject, list, project, projArr, i){
  let displayContainer = document.querySelector('.todos')
  if (displayContainer != null){
    clearContent(displayContainer)
    if (list.classList.contains('active')){
      list.classList.toggle('active')
      body.removeChild(displayContainer)
    }
    const active = document.querySelector('.active')
    active.classList.toggle('active')
    printList(list, displayContainer, forThisProject, i, project, body, projArr)
    list.classList.toggle('active')
  } else {
    let displayContainer = contentCreator.withText('div', '', 'todos')
    printList(list, displayContainer, forThisProject, i, project, body, projArr)
    body.appendChild(displayContainer)
    list.classList.toggle('active')
  }
}

function getToDoTitles(body, project, projArr, i){
  if(projArr != ""){
    for(let j = 0; j < projArr.length - 1; j += 1){
      const list = contentCreator.withText('li', JSON.parse(projArr[j]).title)
      list.onclick = () => {
        displayTodos(body, projArr[j], list, project, projArr, i)
      }
     project.appendChild(list)
   }
  }
}


function addToStorage(project, list){
   const prevLists = localStorage[project]
   localStorage[project] = prevLists + JSON.stringify(list) + "|"
}

function withProjects(projects){
   for(let i = 0; i < localStorage.length; i += 1){
     if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
        projects.push(localStorage.key(i))
     }
  }
 return projects
}

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

function createList(project, title, description, completed, priority) {
   return {
     project: project,
     title: title,
     description: description,
     completed: completed,
     priority: priority,
   }
}

export { clearContent, createDefaultProject, displayProjectNames, addToStorage, withProjects, validateProjectName, createList };

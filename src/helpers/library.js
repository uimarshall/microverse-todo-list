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
  for(let i = 0; i < localStorage.length; i += 1){
    if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
      const project = contentCreator.withText('ul', localStorage.key(i), 'projectListItem')

      const projectsStored = localStorage[localStorage.key(i)]

      getToDoTitles(project, projectsStored.split("|"), i)

      leftSide.appendChild(project);
    }
  }
}

function displayList(currentList){
  const thisList = contentCreator.withText('ul', `Title: ${JSON.parse(currentList).title}`)
  thisList.appendChild(contentCreator.withText('li', `Description:    ${JSON.parse(currentList).description}`))
  thisList.appendChild(contentCreator.withText('li', `Completed:  ${JSON.parse(currentList).completed}`))
  thisList.appendChild(contentCreator.withText('li', `Priority:   ${JSON.parse(currentList).priority}`))
  const deleteBtn = contentCreator.withText('li', 'Delete')
  deleteBtn.onclick = () => {
       projArr.splice(projArr.indexOf(projArr[j]), 1)
       localStorage[localStorage.key(i)] = projArr.join('|')
       project.removeChild(list)
  }
  thisList.appendChild(deleteBtn)

  return thisList
}

function getToDoTitles(project, projArr, i){
  //create a display: none class to toggle
  let expand = true

  if(projArr != ""){
    for(let j = 0; j < projArr.length - 1; j += 1){
      const list = contentCreator.withText('li', JSON.parse(projArr[j]).title)
      list.onclick = () => {
        clearContent(list)
        list.appendChild(contentCreator.withText('li', JSON.parse(projArr[j]).title))
        if (expand) {
          

          expand = false

        } else {

const displayTodos = contentCreator.withText('div', '', 'todos')

          displayTodos.appendChild(displayList(projArr[j]))
const body = document.querySelector('body')
body.appendChild(displayTodos)
          expand = true
        }
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

export { clearContent, createDefaultProject, displayProjectNames, getToDoTitles, addToStorage, withProjects, alertMessage, validateProjectName };

import contentCreator from '../helpers/contentCreator';
import addTodos from "./addList";
import addProject from "./addProject";
// import toDoItem from './app';

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

// function deleteList(list, projArr, j, i, project){
//   projArr.splice(projArr.indexOf(projArr[j]), 1)
//   localStorage[localStorage.key(i)] = projArr.join('|')
//   project.removeChild(list)
// }

function getToDoTitles(project, projArr, i){
  let expand = true

  if(projArr != ""){
    for(let j = 0; j < projArr.length - 1; j += 1){
      let list = contentCreator.withText('li', JSON.parse(projArr[j]).title)
      list.onclick = () => {
        if (expand) {
          clearContent(list)
          list.appendChild(contentCreator.withText('li', JSON.parse(projArr[j]).title))
          expand = false
        } else {
          clearContent(list)
          let thisList = contentCreator.withText('ul', `Title: ${JSON.parse(projArr[j]).title}`)
          thisList.appendChild(contentCreator.withText('li', `Description:    ${JSON.parse(projArr[j]).description}`))
          thisList.appendChild(contentCreator.withText('li', `Completed:  ${JSON.parse(projArr[j]).completed}`))
          thisList.appendChild(contentCreator.withText('li', `Priority:   ${JSON.parse(projArr[j]).priority}`))
          let deleteBtn = contentCreator.withText('li', 'Delete')
          deleteBtn.onclick = () => {
             // deleteList(list, projArr, j, i, project)

               projArr.splice(projArr.indexOf(projArr[j]), 1)
               localStorage[localStorage.key(i)] = projArr.join('|')
               project.removeChild(list)
          }
          thisList.appendChild(deleteBtn)

          list.appendChild(thisList)
          expand = true
        }
      }
     project.appendChild(list)
   }
  }
}

export default function defaultIndex(content) {
  console.log(localStorage)

  const leftSide = contentCreator.withText('div', '', 'left-side')
  content.appendChild(leftSide)

  leftSide.appendChild(contentCreator.withText('h2', 'Project List'));

  createDefaultProject()


  displayProjectNames(leftSide)


  const rightSide = contentCreator.withText('div', '', 'right-side')
  content.appendChild(rightSide)

  const addNewList = contentCreator.withText('button', "Add New List", 'addNewList')
  addNewList.onclick = () => {
    clearContent(content)
    content.appendChild(addTodos())
  }
  rightSide.appendChild(addNewList)

  const addNewProject = contentCreator.withText('button', "Add New Project", 'addNewProject')
  addNewProject.onclick = () => {
    clearContent(content)
    content.appendChild(addProject())
  }
  rightSide.appendChild(addNewProject)

  content.classList.add('default');

  return content;
}

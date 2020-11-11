import contentCreator from '../helpers/contentCreator';
import addTodos from "./addList";
import addProject from "./addProject";
import toDoItem from './app';

function clearContent(content){
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function getToDoTitles(project){
  //create a loop to go through a project and append titles to it
}

export default function defaultIndex(content) {

  content.appendChild(contentCreator.withText('h2', 'Project List'));

  const defaultProjectChoice = contentCreator.withHTML('p', 'Default Project')
  defaultProjectChoice.classList.add('projectListItem')
  // defaultProjectChoice.onclick = () => {
  // }

  // getToDoTitles(defaultProjectChoice)

  content.appendChild(defaultProjectChoice);

  console.log(localStorage)
  // alert(localStorage.length)
  for(let i = 0; i < localStorage.length; i += 1){
    if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
    // console.log(localStorage.key(i))
    const project = contentCreator.withText('ul', localStorage.key(i), 'projectListItem')

    // let something = localStorage[localStorage.key(i)].split("}],{").join("},{")
    // alert(something)
    // alert(localStorage.getItem(localStorage.key(i)))
    // const projectsStored = JSON.parse(localStorage[localStorage.key(i)])
    const projectsStored = localStorage.getItem(localStorage[localStorage.key(i)])
    const projArr = JSON.parse(projectsStored)//projectsStored.split("}{")
    alert(projArr)
    // alert(projectsStored)
     // project.appendChild(contentCreator.withText('li', projectsStored.title))
     content.appendChild(project);
  }
}




    const addNewList = document.createElement('button')
    addNewList.classList.add('addNewList')
    addNewList.innerText = "Add New List"
    addNewList.onclick = () => {
      clearContent(content)
      content.appendChild(addTodos())
    }
    content.appendChild(addNewList)

    const addNewProject = document.createElement('button')
    addNewProject.classList.add('addNewProject')
    addNewProject.innerText = "Add New Project"
    addNewProject.onclick = () => {
      clearContent(content)
      content.appendChild(addProject())
    }
    content.appendChild(addNewProject)

  content.classList.add('default');

  return content;
}

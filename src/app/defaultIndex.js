import contentCreator from '../helpers/contentCreator';
import addTodos from "./addList";
import addProject from "./addProject";

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
  defaultProjectChoice.onclick = () => {

  }

  getToDoTitles(defaultProjectChoice)

  content.appendChild(defaultProjectChoice);

  console.log(localStorage)

  for(let i = 0; i < localStorage.length; i += 1){
    if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
    console.log(localStorage.key(i))
    const projectChoiceTest = contentCreator.withText('p', localStorage.key(i))
    projectChoiceTest.classList.add('projectListItem')
    projectChoiceTest.onclick = () => {

    }
      getToDoTitles(projectChoiceTest)

    content.appendChild(projectChoiceTest);
  }
}
    // const projectChoiceTest = contentCreator.withText('p', localStorage.TestProject.title)


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

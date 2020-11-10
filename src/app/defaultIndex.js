import contentCreator from '../helpers/contentCreator';
import addTodos from "./addForms";

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
    clearContent(content)
  }

  getToDoTitles(defaultProjectChoice)

  content.appendChild(defaultProjectChoice);
  const projectChoice1 = contentCreator.withText('p', 'Project1')
  projectChoice1.classList.add('projectListItem')
  projectChoice1.onclick = () => {
    clearContent(content)
  }
    getToDoTitles(projectChoice1)

  content.appendChild(projectChoice1);
  const projectChoice2 = contentCreator.withText('p', 'Project2')
  projectChoice2.classList.add('projectListItem')
  projectChoice2.onclick = () => {
    clearContent(content)
  }
    getToDoTitles(projectChoice2)

  content.appendChild(projectChoice2);

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
      }
      content.appendChild(addNewProject)

  content.classList.add('default');

  return content;
}

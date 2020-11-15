import './main.scss';
import contentCreator from './helpers/contentCreator';
import addList from './app/addList';
import addProject from './app/addProject';
import {
  createDefaultProject,
  displayProjectNames,
  changePage,
  projectNames,
} from './helpers/viewHelpers';

const body = document.querySelector('body');
const content = document.getElementById('content');
createDefaultProject();

const leftSide = contentCreator.withText('div', '', 'left-side');
leftSide.appendChild(contentCreator.withText('h2', 'Project List'));
displayProjectNames(leftSide);
content.appendChild(leftSide);

const rightSide = contentCreator.withText('div', '', 'right-side');
content.appendChild(rightSide);

const addNewList = contentCreator.withText('button', 'Add New Todo', 'addNewList');
addNewList.onclick = () => {
  changePage(body, content, addList(projectNames([])));
};
rightSide.appendChild(addNewList);

const addNewProject = contentCreator.withText('button', 'Add New Project', 'addNewProject');
addNewProject.onclick = () => {
  changePage(body, content, addProject());
};
rightSide.appendChild(addNewProject);

content.classList.add('default');

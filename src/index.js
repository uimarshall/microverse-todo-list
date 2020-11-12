import './main.scss';
import contentCreator from './helpers/contentCreator';
import addList from './app/addList';
import addProject from './app/addProject';
import {
  clearContent,
  createDefaultProject,
  displayProjectNames,
  clearDisplay,
} from './helpers/library';

const body = document.querySelector('body');
const content = document.getElementById('content');

const leftSide = contentCreator.withText('div', '', 'left-side');
content.appendChild(leftSide);

leftSide.appendChild(contentCreator.withText('h2', 'Project List'));

createDefaultProject();

displayProjectNames(leftSide);

const rightSide = contentCreator.withText('div', '', 'right-side');
content.appendChild(rightSide);

const addNewList = contentCreator.withText('button', 'Add New List', 'addNewList');
addNewList.onclick = () => {
  clearDisplay(body);
  clearContent(content);
  content.appendChild(addList());
};
rightSide.appendChild(addNewList);

const addNewProject = contentCreator.withText('button', 'Add New Project', 'addNewProject');
addNewProject.onclick = () => {
  clearDisplay(body);
  clearContent(content);
  content.appendChild(addProject());
};
rightSide.appendChild(addNewProject);

content.classList.add('default');
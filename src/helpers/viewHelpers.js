import contentCreator from './contentCreator';
import editList from '../app/editList';

const createDefaultProject = () => {
  if (!localStorage['Default Project']) {
    localStorage['Default Project'] = '';
  }
};

const clearContent = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const clearDisplay = (body) => {
  const displayList = document.querySelector('.todos');
  if (displayList !== null) {
    body.removeChild(displayList);
  }
};

const changePage = (body, content, page) => {
  clearDisplay(body);
  clearContent(content);
  content.appendChild(page);
};

const markChecked = (list, project) => {
  const storageLocation = localStorage[project.value];
  const projArr = storageLocation.split('|');
  let ans = false;
  for (let i = 0; i < projArr.length - 1; i += 1) {
    const indList = JSON.parse(projArr[i]);
    if (indList.title === list.title) {
      if (indList.completed === true) {
        ans = true;
      }
    }
  }
  return ans;
};

const checkBoxChange = (list, project) => {
  list.completed = !list.completed;
  const storageLocation = localStorage[project.value];
  const projArr = storageLocation.split('|');
  for (let i = 0; i < projArr.length - 1; i += 1) {
    const indList = JSON.parse(projArr[i]);
    if (indList.title === list.title) {
      indList.completed = !indList.completed;
      projArr[i] = JSON.stringify(indList);
    }
  }
  localStorage.setItem(project.value, projArr.join('|'));
};

const displayList = (currentList, project) => {
  const list = JSON.parse(currentList);
  const thisList = contentCreator.withValue('ul', `Title: ${list.title}`, `${list.title}`, 'listDisplay');
  thisList.appendChild(contentCreator.withText('li', `Description:    ${list.description}`, 'listDisplay'));
  thisList.appendChild(contentCreator.withText('li', `Due Date:  ${list.date}`, 'listDisplay'));
  thisList.appendChild(contentCreator.withText('li', `Priority:   ${list.priority}`, 'listDisplay'));
  const checkLabel = contentCreator.withText('label', 'Completed');
  const checkbox = contentCreator.withoutLabel('input', 'checkbox', '', 'compconsted');
  checkbox.checked = markChecked(list, project);
  checkbox.onchange = () => {
    checkBoxChange(list, project);
  };
  checkLabel.appendChild(checkbox);
  thisList.appendChild(checkLabel);

  return thisList;
};

const projectNames = (projects) => {
  for (let i = 0; i < localStorage.length; i += 1) {
    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
      projects.push(localStorage.key(i));
    }
  }
  return projects;
};

const printList = (list, displayContainer, forThisProject, i, project, body, projArr) => {
  const thisList = displayList(forThisProject, project);
  const deleteBtn = contentCreator.withText('li', 'Delete', 'listDisplay');
  deleteBtn.onclick = () => {
    projArr.splice(projArr.indexOf(forThisProject), 1);
    localStorage[localStorage.key(i)] = projArr.join('|');
    project.removeChild(list);
    clearContent(thisList);
    body.removeChild(displayContainer);
  };
  const editBtn = contentCreator.withText('li', 'Edit', 'listDisplay');
  editBtn.onclick = () => {
    const content = document.getElementById('content');
    changePage(body, content, editList(projectNames([]), JSON.parse(forThisProject)));
  };
  thisList.appendChild(editBtn);
  thisList.appendChild(deleteBtn);
  displayContainer.appendChild(thisList);
};

const displayTodos = (body, forThisProject, list, project, projArr, i) => {
  const displayContainer = document.querySelector('.todos');
  if (displayContainer != null) {
    clearContent(displayContainer);
    if (list.classList.contains('active')) {
      list.classList.toggle('active');
      body.removeChild(displayContainer);
    }
    const active = document.querySelector('.active');
    active.classList.toggle('active');
    printList(list, displayContainer, forThisProject, i, project, body, projArr);
    list.classList.toggle('active');
  } else {
    const displayContainer = contentCreator.withText('div', '', 'todos');
    printList(list, displayContainer, forThisProject, i, project, body, projArr);
    body.appendChild(displayContainer);
    list.classList.toggle('active');
  }
};

const getToDoTitles = (body, project, projArr, i) => {
  if (projArr !== '') {
    for (let j = 0; j < projArr.length - 1; j += 1) {
      const list = contentCreator.withText('li', JSON.parse(projArr[j]).title);
      list.style.color = (() => {
        const { priority } = JSON.parse(projArr[j]);
        let color = 'black';
        if (priority === 'low') {
          color = 'green';
        } else if (priority === 'medium') {
          color = 'yellow';
        } else {
          color = 'red';
        }
        return color;
      })();
      list.onclick = () => {
        displayTodos(body, projArr[j], list, project, projArr, i);
      };
      project.appendChild(list);
    }
  }
};

const displayProjectNames = (leftSide) => {
  const body = document.querySelector('body');
  for (let i = 0; i < localStorage.length; i += 1) {
    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
      const project = contentCreator.withText('ul', localStorage.key(i), 'projectListItem');
      project.value = localStorage.key(i);
      const projectsStored = localStorage[localStorage.key(i)];
      getToDoTitles(body, project, projectsStored.split('|'), i);

      leftSide.appendChild(project);
    }
  }
};

export {
  createDefaultProject,
  displayProjectNames,
  changePage,
  projectNames,
};

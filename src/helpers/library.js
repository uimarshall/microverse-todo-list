import contentCreator from './contentCreator';

function clearContent(content) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function clearDisplay(body) {
  const displayList = document.querySelector('.todos');
  if (displayList !== null) {
    body.removeChild(displayList);
  }
}

function markChecked(list, project) {
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
}

function checkBoxChange(list, project) {
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
}

function displayList(currentList, project) {
  const list = JSON.parse(currentList);
  const thisList = contentCreator.withValue('ul', `Title: ${list.title}`, `${list.title}`);
  thisList.appendChild(contentCreator.withText('li', `Description:    ${list.description}`));
  thisList.appendChild(contentCreator.withText('li', `Due Date:  ${list.date}`));
  thisList.appendChild(contentCreator.withText('li', `Priority:   ${list.priority}`));
  const checkLabel = contentCreator.withText('label', 'Completed');
  const checkbox = contentCreator.withoutLabel('input', 'checkbox', '', 'compconsted');
  checkbox.checked = markChecked(list, project);
  checkbox.onchange = () => {
    checkBoxChange(list, project);
  };
  checkLabel.appendChild(checkbox);
  thisList.appendChild(checkLabel);

  return thisList;
}

function printList(list, displayContainer, forThisProject, i, project, body, projArr) {
  const thisList = displayList(forThisProject, project);
  const deleteBtn = contentCreator.withText('li', 'Delete');
  deleteBtn.onclick = () => {
    projArr.splice(projArr.indexOf(forThisProject), 1);
    localStorage[localStorage.key(i)] = projArr.join('|');
    project.removeChild(list);
    clearContent(thisList);
    body.removeChild(displayContainer);
  };
  thisList.appendChild(deleteBtn);
  displayContainer.appendChild(thisList);
}

function displayTodos(body, forThisProject, list, project, projArr, i) {
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
}

function getToDoTitles(body, project, projArr, i) {
  if (projArr !== '') {
    for (let j = 0; j < projArr.length - 1; j += 1) {
      const list = contentCreator.withText('li', JSON.parse(projArr[j]).title);
      list.onclick = () => {
        displayTodos(body, projArr[j], list, project, projArr, i);
      };
      project.appendChild(list);
    }
  }
}

function createDefaultProject() {
  if (!localStorage['Default Project']) {
    localStorage['Default Project'] = '';
  }
}

function displayProjectNames(leftSide) {
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
}

function changePage(body, content, page) {
  clearDisplay(body);
  clearContent(content);
  content.appendChild(page);
}

function alertMessage(e, message) {
  e.preventDefault();
  const header = document.querySelector('header');
  const alert = document.querySelector('.validation-alert');
  if (alert) {
    header.removeChild(alert);
  }
  header.appendChild(contentCreator.withText('p', `${message}`, 'validation-alert'));
}

function validateListName(e, projectName, desiredTitle) {
  const storageLocation = localStorage[projectName];
  const projArr = storageLocation.split('|');
  let store = true;
  for (let i = 0; i < projArr.length - 1; i += 1) {
    const indList = JSON.parse(projArr[i]);
    if (indList.title === desiredTitle) {
      alertMessage(e, 'This List Already Exists!');
      store = false;
    }
  }
  return store;
}

function addToStorage(project, list) {
  const prevLists = localStorage[project];
  localStorage[project] = `${prevLists + JSON.stringify(list)}|`;
}

function addProjects(projects) {
  for (let i = 0; i < localStorage.length; i += 1) {
    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
      projects.push(localStorage.key(i));
    }
  }
  return projects;
}

function createList(project, title, description, date, priority, completed) {
  return {
    project,
    title,
    description,
    date,
    priority,
    completed,
  };
}

function checkInputs(e, listDetails) {
  let valid = true;
  Object.entries(listDetails).forEach(item => {
    if (item[1] === '') {
      valid = false;
      alertMessage(e, 'Please fill in all fields!');
    }
  });
  if (valid) {
    if (validateListName(e, listDetails.project, listDetails.title)) {
      addToStorage(listDetails.project, listDetails);
    }
  }
}

function validateProjectName(e, projectName) {
  if (localStorage[projectName] !== undefined) {
    alertMessage(e, 'This Project Already Exists!');
  } else if (projectName.trim() === '') {
    alertMessage(e, 'Please name this Project!');
  } else {
    localStorage.setItem(`${projectName}`, '');
  }
}

export {
  createDefaultProject,
  displayProjectNames,
  changePage,
  addProjects,
  createList,
  checkInputs,
  validateProjectName,
};

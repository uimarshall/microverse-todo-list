import contentCreator from './contentCreator';

function alertMessage(e, message) {
  e.preventDefault();
  const header = document.querySelector('header');
  const alert = document.querySelector('.validation-alert');
  if (alert) {
    header.removeChild(alert);
  }
  header.appendChild(contentCreator.withText('p', `${message}`, 'validation-alert'));
}

function updateList(e, update, list) {
  const thisProject = localStorage[list.project];
  const projArr = thisProject.split('|');
  for (let i = 0; i < projArr.length - 1; i += 1) {
    const listItem = JSON.parse(projArr[i]);
    if (listItem.title === list.title) {
      projArr.splice(projArr.indexOf(JSON.stringify(listItem)), 1);
      localStorage[list.project] = projArr.join('|');
    }
  }
  const updatedProject = localStorage[update.project];
  const updatedProjArr = updatedProject.split('|');
  let store = true;
  for (let i = 0; i < updatedProjArr.length - 1; i += 1) {
    const newListItem = JSON.parse(updatedProjArr[i]);
    if (newListItem.title === update.title) {
      alertMessage(e, 'That Project already has that List name');
      store = false;
    }
  }

  if (store === true) {
    updatedProjArr.splice(0, 0, JSON.stringify(update));
    localStorage[update.project] = updatedProjArr.join('|');
  } else {
    projArr.splice(0, 0, JSON.stringify(list));
    localStorage[list.project] = projArr.join('|');
  }
}

function updateInfo(project, title, description, date, priority) {
  return {
    project,
    title,
    description,
    date,
    priority,
  };
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

function validateProjectName(e, projectName) {
  if (localStorage[projectName] !== undefined) {
    alertMessage(e, 'This Project Already Exists!');
  } else if (projectName.trim() === '') {
    alertMessage(e, 'Please name this Project!');
  } else {
    localStorage.setItem(`${projectName}`, '');
  }
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

export {
  updateInfo,
  updateList,
  createList,
  checkInputs,
  validateProjectName,
};

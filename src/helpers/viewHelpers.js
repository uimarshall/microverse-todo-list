import contentCreator from './contentCreator';

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

function updateInfo(project, title, description, date, priority) {
  return {
    project,
    title,
    description,
    date,
    priority,
  };
}

function updateList(update, list) {
  const thisProject = localStorage[list.project];
  const projArr = thisProject.split('|');
  for (let i = 0; i < projArr.length - 1; i += 1) {
    const listItem = JSON.parse(projArr[i]);
    if (listItem.title === list.title) {
      projArr.splice(projArr.indexOf(JSON.stringify(listItem)), 1);
    }
  }
  projArr.splice(0, 0, JSON.stringify(update));
  localStorage[list.project] = projArr.join('|');
}


function addToStorage(project, list) {
  const prevLists = localStorage[project];
  localStorage[project] = `${prevLists + JSON.stringify(list)}|`;
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
  createList,
  updateInfo,
  updateList,
  checkInputs,
  validateProjectName,
};

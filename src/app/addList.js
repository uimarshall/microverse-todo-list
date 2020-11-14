import contentCreator from '../helpers/contentCreator';
import {
  createList,
  checkInputs,
} from '../helpers/listLogic';


const addList = (projectNames) => {
  const form = document.createElement('form');

  const projectWrapper = contentCreator.withText('div', '', 'form-group');
  const projectSelect = contentCreator.selectMenu(projectNames);
  projectSelect.classList.add('form-control');
  projectWrapper.appendChild(projectSelect);
  form.appendChild(projectWrapper);

  const titleWrapper = contentCreator.withText('div', '', 'form-group');
  const titleInput = contentCreator.withoutLabel('input', 'text', 'title', 'form-control');
  titleInput.required = 'true';
  titleWrapper.appendChild(titleInput);
  form.appendChild(titleWrapper);

  const descriptionWrapper = contentCreator.withText('div', '', 'form-group');
  const descriptionInput = contentCreator.withText('textarea', '', 'form-control');
  descriptionInput.setAttribute('placeholder', 'Enter Description');
  descriptionInput.required = 'true';
  descriptionWrapper.appendChild(descriptionInput);
  form.append(descriptionWrapper);

  const dateWrapper = contentCreator.withText('div', '', 'form-check');
  const dateSelect = contentCreator.withoutLabel('input', 'date', '', 'form-control');
  dateSelect.required = 'true';
  dateWrapper.appendChild(dateSelect);
  form.appendChild(dateWrapper);

  const menuOptions = ['low', 'medium', 'high'];
  const selectField = contentCreator.selectMenu(menuOptions);
  selectField.classList.add('form-control');
  form.appendChild(selectField);

  const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', 'Add ToDo', '', 'compconsted');
  submitBtn.classList.add('btn', 'btn-info', 'my-3');
  submitBtn.onclick = (e) => {
    checkInputs(e,
      createList(projectSelect.value, titleInput.value,
        descriptionInput.value, dateSelect.value, selectField.value, false));
  };
  form.appendChild(submitBtn);

  form.classList.add('default');

  return form;
};

export default addList;

import contentCreator from '../helpers/contentCreator';
import { updateList, updateInfo } from '../helpers/viewHelpers';

export default function editList(addProjects, list) {
  const form = document.createElement('form');

  const projectWrapper = contentCreator.withText('div', '', 'form-group');
  const projectSelect = contentCreator.selectMenu(addProjects);
  projectSelect.value = list.project;
  projectSelect.classList.add('form-control');
  projectWrapper.appendChild(projectSelect);
  form.appendChild(projectWrapper);

  const titleWrapper = contentCreator.withText('div', '', 'form-group');
  const titleInput = contentCreator.withoutLabelPlusValue('input', 'text', list.title, '', 'form-control');
  titleInput.required = 'true';
  titleWrapper.appendChild(titleInput);
  form.appendChild(titleWrapper);

  const descriptionWrapper = contentCreator.withText('div', '', 'form-group');
  const descriptionInput = contentCreator.withValue('textarea', '', list.description, 'form-control');
  descriptionInput.setAttribute('placeholder', 'Enter Description');
  descriptionInput.required = 'true';
  descriptionWrapper.appendChild(descriptionInput);
  form.append(descriptionWrapper);

  const dateWrapper = contentCreator.withText('div', '', 'form-check');
  const dateSelect = contentCreator.withoutLabelPlusValue('input', 'date', list.date, '', 'form-control');
  dateSelect.required = 'true';
  dateWrapper.appendChild(dateSelect);
  form.appendChild(dateWrapper);

  const menuOptions = ['low', 'medium', 'high'];
  const selectField = contentCreator.selectMenu(menuOptions);
  selectField.value = list.priority;
  selectField.classList.add('form-control');
  form.appendChild(selectField);

  const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', 'Update ToDo', '', 'compconsted');
  submitBtn.classList.add('btn', 'btn-info', 'my-3');
  submitBtn.onclick = () => {
    updateList(
      updateInfo(
        projectSelect.value,
        titleInput.value,
        descriptionInput.value,
        dateSelect.value,
        selectField.value,
      ),
      list,
    );
  };
  form.appendChild(submitBtn);

  form.classList.add('default');

  return form;
}

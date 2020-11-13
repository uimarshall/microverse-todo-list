import capFirst from '../helpers/capFirst';
import contentCreator from '../helpers/contentCreator';
import { validateProjectName } from '../helpers/viewHelpers';

export default function addProject() {
  const form = document.createElement('form');

  const projectWrapper = contentCreator.withText('div', '', 'form-group');
  const projectName = contentCreator.withoutLabel('input', 'text', 'Project Title', 'todo-input');
  projectName.classList.add('form-control');
  projectName.required = 'true';
  projectWrapper.appendChild(projectName);
  form.appendChild(projectWrapper);

  const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', 'Add Project', '', 'compconsted');
  submitBtn.classList.add('btn', 'btn-info', 'my-3');
  submitBtn.onclick = (e) => {
    validateProjectName(e, capFirst(projectName.value));
  };
  form.appendChild(submitBtn);

  form.classList.add('default');

  return form;
}

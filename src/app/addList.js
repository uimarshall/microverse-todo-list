import contentCreator from '../helpers/contentCreator';
import {
  addToStorage,
  withProjects,
  createList,
} from '../helpers/library';

export default function addList() {
  const form = document.createElement('form');

  const inputWrapper = contentCreator.withText('div', '', 'form-group');
  const projectSelect = contentCreator.selectMenu(withProjects([]));
  projectSelect.classList.add('form-control');
  inputWrapper.appendChild(projectSelect);
  form.appendChild(inputWrapper);

  const inputWrapper2 = contentCreator.withText('div', '', 'form-group');
  const inputField2 = contentCreator.withoutLabel('input', 'text', 'title', 'form-control');
  inputWrapper2.appendChild(inputField2);
  form.appendChild(inputWrapper2);

  const inputWrapper3 = contentCreator.withText('div', '', 'form-group');

  const textarea = contentCreator.withText('textarea', '', 'form-control');
  textarea.setAttribute('placeholder', 'Enter Description');
  inputWrapper3.appendChild(textarea);
  form.append(inputWrapper3);

  // const textBoxWrapper = contentCreator.withText('div', '', 'form-check');
  // const textBoxField = contentCreator.withLabel('input',
  // 'checkbox', '', 'compconsted', 'completed');
  // textBoxWrapper.appendChild(textBoxField);
  // form.appendChild(textBoxWrapper);

  const dateWrapper = contentCreator.withText('div', '', 'form-check');
  const dateSelect = contentCreator.withoutLabel('input', 'date', '', 'form-control');
  dateWrapper.appendChild(dateSelect);
  form.appendChild(dateWrapper);

  const menuOptions = ['low', 'medium', 'high'];
  const selectField = contentCreator.selectMenu(menuOptions);
  selectField.classList.add('form-control');
  form.appendChild(selectField);

  const submitBtn = contentCreator.withoutLabelPlusValue('input', 'submit', 'Add ToDo', '', 'compconsted');
  submitBtn.classList.add('btn', 'btn-info', 'my-3');
  submitBtn.onclick = () => {
    if (selectField.value='low') {
     alert(inputField2.style.color = 'red')
      
    }
   
    addToStorage(projectSelect.value,
      createList(projectSelect.value, inputField2.value,
        textarea.value, dateSelect.value, selectField.value, false));
  };
  form.appendChild(submitBtn);

  form.classList.add('default');

  return form;
}

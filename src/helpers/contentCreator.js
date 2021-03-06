import capFirst from './capFirst';

const contentCreator = {

  withText(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(className);

    return element;
  },

  withValueID(type, content, value, className) {
    const element = document.createElement(type);
    element.textContent = content;
    element.id = value;
    element.classList.add(className);

    return element;
  },

  withValue(type, content, value, className) {
    const element = document.createElement(type);
    element.textContent = content;
    element.value = value;
    element.classList.add(className);

    return element;
  },

  selectMenu(options) {
    const element = document.createElement('select');
    element.id = 'selectMenu';
    for (let i = 0; i < options.length; i += 1) {
      const option = document.createElement('option');
      option.value = `${options[i]}`;
      option.innerText = `${capFirst(options[i])}`;
      element.appendChild(option);
    }
    return element;
  },

  withoutLabel(type, format, placeholder, className) {
    const element = document.createElement(type);
    element.type = format;
    element.placeholder = placeholder;
    element.classList.add(className);

    return element;
  },

  withoutLabelPlusValue(type, format, value, placeholder, className) {
    const element = document.createElement(type);
    element.type = format;
    element.value = value;
    element.placeholder = placeholder;
    element.classList.add(className);

    return element;
  },

  withLabel(type, format, placeholder, className, labelFor) {
    const element = document.createElement(type);
    element.type = format;
    element.placeholder = placeholder;
    element.classList.add(className);
    element.id = labelFor;
    const label = document.createElement('label');
    label.textContent = capFirst(labelFor);
    label.for = labelFor;
    label.appendChild(element);

    return label;
  },
};

export default contentCreator;

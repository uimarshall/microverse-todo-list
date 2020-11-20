import capFirst from '../src/helpers/capFirst';
import contentCreator from '../src/helpers/contentCreator';
import { createList, updateInfo } from '../src/helpers/listLogic';

describe('capFirst function', () => {
  test('capitalizes a string', () => {
    expect(capFirst('hello')).toEqual('Hello');
    expect(capFirst('hello')).not.toEqual('hello');
  });
});

describe('withText function', () => {
  const element = contentCreator.withText('p', 'Hello World!', 'element_class');

  test('is defined', () => {
    expect(contentCreator.withText()).toBeDefined();
    expect(contentCreator.withText()).not.toBeUndefined();
  });

  test('creates dynamic html elements', () => {
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with a class', () => {
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('withValueID function', () => {
  const element = contentCreator.withValueID('p', 'Hello World!', 'element_id', 'element_class');

  test('is defined', () => {
    expect(contentCreator.withValueID()).toBeDefined();
    expect(contentCreator.withValueID()).not.toBeUndefined();
  });

  test('creates dynamic html elements', () => {
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with an ID', () => {
    expect(element.id).toEqual('element_id');
  });

  test('creates dynamic html elements with a class', () => {
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('withValue function', () => {
  const element = contentCreator.withValue('p', 'Hello World!', 'element_value', 'element_class');

  test('is defined', () => {
    expect(contentCreator.withValue()).toBeDefined();
    expect(contentCreator.withValue()).not.toBeUndefined();
  });

  test('creates dynamic html elements', () => {
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with a value', () => {
    expect(element.value).toEqual('element_value');
  });

  test('creates dynamic html elements with a class', () => {
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('selectMenu function', () => {
  const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);

  test('creates dynamic html select menus', () => {
    expect(element.nodeName).toEqual('SELECT');
  });

  test('creates dynamic html select menus with an ID', () => {
    expect(element.id).toEqual('selectMenu');
  });

  test('creates dynamic html select menus with options', () => {
    expect(element.firstChild.value).toEqual('pizza');
  });

  test('creates dynamic html select menus with options', () => {
    expect(element.lastChild.value).toEqual('noodles');
  });
});

describe('withoutLabel function', () => {
  const element = contentCreator.withoutLabel('input', 'text', 'Enter a Name..', 'input_class');

  test('is defined', () => {
    expect(contentCreator.withoutLabel()).toBeDefined();
    expect(contentCreator.withoutLabel()).not.toBeUndefined();
  });

  test('creates dynamic html elements', () => {
    expect(element.nodeName).toEqual('INPUT');
  });

  test('creates dynamic html elements with specified element type', () => {
    expect(element.type).toEqual('text');
  });

  test('creates dynamic html elements with a placeholder', () => {
    expect(element.placeholder).toEqual('Enter a Name..');
  });

  test('creates dynamic html elements with a class', () => {
    expect(element.classList.contains('input_class')).toEqual(true);
  });
});

describe('withoutLabelPlusValue function', () => {
  const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!', 'Enter a Name..', 'input_class');

  test('is defined', () => {
    expect(contentCreator.withoutLabelPlusValue()).toBeDefined();
    expect(contentCreator.withoutLabelPlusValue()).not.toBeUndefined();
  });

  test('creates dynamic html elements', () => {
    expect(element.nodeName).toEqual('INPUT');
  });

  test('creates dynamic html elements with a type', () => {
    expect(element.type).toEqual('text');
  });

  test('creates dynamic html elements with a value', () => {
    expect(element.value).toEqual('Hello!');
  });

  test('creates dynamic html elements with a placeholder', () => {
    expect(element.placeholder).toEqual('Enter a Name..');
  });

  test('creates dynamic html elements with a class', () => {
    expect(element.classList.contains('input_class')).toEqual(true);
  });
});

describe('createList function', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);

  test('is defined', () => {
    expect(createList()).toBeDefined();
    expect(createList()).not.toBeUndefined();
  });

  test('returns an object with a project name property', () => {
    expect(newList.project).toEqual('Project1');
  });

  test('returns an object with a title property', () => {
    expect(newList.title).toEqual('Title1');
  });

  test('returns an object with a description property', () => {
    expect(newList.description).toEqual('Description1');
  });

  test('returns an object with a date property', () => {
    expect(newList.date).toEqual('Date1');
  });

  test('returns an object with a priority property', () => {
    expect(newList.priority).toEqual('Priority1');
  });

  test('returns an object with a completed property', () => {
    expect(newList.completed).toEqual(true);
  });
});

describe('updateInfo function', () => {
  const updateList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');

  test('is defined', () => {
    expect(updateInfo()).toBeDefined();
    expect(updateInfo()).not.toBeUndefined();
  });

  test('returns an object with a project name property', () => {
    expect(updateList.project).toEqual('Project2');
  });

  test('returns an object with a title property', () => {
    expect(updateList.title).toEqual('Title2');
  });

  test('returns an object with a description property', () => {
    expect(updateList.description).toEqual('Description2');
  });

  test('returns an object with a date property', () => {
    expect(updateList.date).toEqual('Date2');
  });

  test('returns an object with a priority property', () => {
    expect(updateList.priority).toEqual('Priority2');
  });
});

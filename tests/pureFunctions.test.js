import capFirst from '../src/helpers/capFirst';
import contentCreator from '../src/helpers/contentCreator';
import { createList, updateInfo } from '../src/helpers/listLogic';

describe('capFirst function', () => {
  test('capitalizes a string', () => {
    expect(capFirst('hello')).toEqual('Hello');
  });
});

describe('withText function', () => {
  test('creates dynamic html elements', () => {
    const element = contentCreator.withText('p');
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    const element = contentCreator.withText('p', 'Hello World!');
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with a class', () => {
    const element = contentCreator.withText('p', '', 'element_class');
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('withValueID function', () => {
  test('creates dynamic html elements', () => {
    const element = contentCreator.withValueID('p');
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    const element = contentCreator.withValueID('p', 'Hello World!');
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with an ID', () => {
    const element = contentCreator.withValueID('p', '', 'element_id');
    expect(element.id).toEqual('element_id');
  });

  test('creates dynamic html elements with a class', () => {
    const element = contentCreator.withValueID('p', '', '', 'element_class');
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('withValue function', () => {
  test('creates dynamic html elements', () => {
    const element = contentCreator.withValue('p');
    expect(element.nodeName).toEqual('P');
  });

  test('creates dynamic html elements with text', () => {
    const element = contentCreator.withValue('p', 'Hello World!');
    expect(element.textContent).toEqual('Hello World!');
  });

  test('creates dynamic html elements with a value', () => {
    const element = contentCreator.withValue('p', '', 'element_value');
    expect(element.value).toEqual('element_value');
  });

  test('creates dynamic html elements with a class', () => {
    const element = contentCreator.withValue('p', '', '', 'element_class');
    expect(element.classList.contains('element_class')).toEqual(true);
  });
});

describe('selectMenu function', () => {
  test('creates dynamic html select menus', () => {
    const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
    expect(element.nodeName).toEqual('SELECT');
  });

  test('creates dynamic html select menus with an ID', () => {
    const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
    expect(element.id).toEqual('selectMenu');
  });

  test('creates dynamic html select menus with options', () => {
    const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
    expect(element.firstChild.value).toEqual('pizza');
  });

  test('creates dynamic html select menus with options', () => {
    const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
    expect(element.lastChild.value).toEqual('noodles');
  });
});

describe('withoutLabel function', () => {
  test('creates dynamic html elements', () => {
    const element = contentCreator.withoutLabel('input');
    expect(element.nodeName).toEqual('INPUT');
  });

  test('creates dynamic html elements with specified element type', () => {
    const element = contentCreator.withoutLabel('input', 'text');
    expect(element.type).toEqual('text');
  });

  test('creates dynamic html elements with a placeholder', () => {
    const element = contentCreator.withoutLabel('input', 'text', 'Enter a Name..');
    expect(element.placeholder).toEqual('Enter a Name..');
  });

  test('creates dynamic html elements with a class', () => {
    const element = contentCreator.withoutLabel('input', 'text', 'Enter a Name..', 'input_class');
    expect(element.classList.contains('input_class')).toEqual(true);
  });
});

describe('withoutLabelPlusValue function', () => {
  test('creates dynamic html elements', () => {
    const element = contentCreator.withoutLabelPlusValue('input');
    expect(element.nodeName).toEqual('INPUT');
  });

  test('creates dynamic html elements with a type', () => {
    const element = contentCreator.withoutLabelPlusValue('input', 'text');
    expect(element.type).toEqual('text');
  });

  test('creates dynamic html elements with a value', () => {
    const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!');
    expect(element.value).toEqual('Hello!');
  });

  test('creates dynamic html elements with a placeholder', () => {
    const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!', 'Enter a Name..');
    expect(element.placeholder).toEqual('Enter a Name..');
  });

  test('creates dynamic html elements with a class', () => {
    const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!', 'Enter a Name..', 'input_class');
    expect(element.classList.contains('input_class')).toEqual(true);
  });
});

describe('createList function', () => {
  test('is defined', () => {
    expect(createList()).toBeDefined();
  });

  test('returns an object with a project name property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.project).toEqual('Project1');
  });

  test('returns an object with a title property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.title).toEqual('Title1');
  });

  test('returns an object with a description property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.description).toEqual('Description1');
  });

  test('returns an object with a date property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.date).toEqual('Date1');
  });

  test('returns an object with a priority property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.priority).toEqual('Priority1');
  });

  test('returns an object with a completed property', () => {
    const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
    expect(newList.completed).toEqual(true);
  });
});

describe('updateInfo function', () => {
  test('is defined', () => {
    expect(updateInfo()).toBeDefined();
  });

  test('returns an object with a project name property', () => {
    const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
    expect(newList.project).toEqual('Project2');
  });

  test('returns an object with a title property', () => {
    const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
    expect(newList.title).toEqual('Title2');
  });

  test('returns an object with a description property', () => {
    const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
    expect(newList.description).toEqual('Description2');
  });

  test('returns an object with a date property', () => {
    const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
    expect(newList.date).toEqual('Date2');
  });

  test('returns an object with a priority property', () => {
    const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
    expect(newList.priority).toEqual('Priority2');
  });
});

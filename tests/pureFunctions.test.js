import capFirst from '../src/helpers/capFirst';
import contentCreator from '../src/helpers/contentCreator';
import { createList, updateInfo } from '../src/helpers/listLogic';

test('capitalize a string', () => {
  expect(capFirst('hello')).toEqual('Hello');
});

test('contentCreator creates dynamic html element', () => {
  const element = contentCreator.withText('p');
  expect(element.nodeName).toEqual('P');
});

test('contentCreator creates dynamic html element with text', () => {
  const element = contentCreator.withText('p', 'Hello World!');
  expect(element.textContent).toEqual('Hello World!');
});

test('contentCreator creates dynamic html element with a class', () => {
  const element = contentCreator.withText('p', '', 'element_class');
  expect(element.classList.contains('element_class')).toEqual(true);
});

test('contentCreator creates dynamic html element', () => {
  const element = contentCreator.withValueID('p');
  expect(element.nodeName).toEqual('P');
});

test('contentCreator creates dynamic html element with text', () => {
  const element = contentCreator.withValueID('p', 'Hello World!');
  expect(element.textContent).toEqual('Hello World!');
});

test('contentCreator creates dynamic html element with an ID', () => {
  const element = contentCreator.withValueID('p', '', 'element_id');
  expect(element.id).toEqual('element_id');
});

test('contentCreator creates dynamic html element with a class', () => {
  const element = contentCreator.withValueID('p', '', '', 'element_class');
  expect(element.classList.contains('element_class')).toEqual(true);
});

test('contentCreator creates dynamic html element', () => {
  const element = contentCreator.withValue('p');
  expect(element.nodeName).toEqual('P');
});

test('contentCreator creates dynamic html element with text', () => {
  const element = contentCreator.withValue('p', 'Hello World!');
  expect(element.textContent).toEqual('Hello World!');
});

test('contentCreator creates dynamic html element with a value', () => {
  const element = contentCreator.withValue('p', '', 'element_value');
  expect(element.value).toEqual('element_value');
});

test('contentCreator creates dynamic html element with a class', () => {
  const element = contentCreator.withValue('p', '', '', 'element_class');
  expect(element.classList.contains('element_class')).toEqual(true);
});

test('contentCreator creates dynamic html select menu', () => {
  const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
  expect(element.nodeName).toEqual('SELECT');
});

test('contentCreator creates dynamic html select menu with an ID', () => {
  const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
  expect(element.id).toEqual('selectMenu');
});

test('contentCreator creates dynamic html select menu with options', () => {
  const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
  expect(element.firstChild.value).toEqual('pizza');
});

test('contentCreator creates dynamic html select menu with options', () => {
  const element = contentCreator.selectMenu(['pizza', 'chicken', 'noodles']);
  expect(element.lastChild.value).toEqual('noodles');
});

test('contentCreator creates dynamic html element', () => {
  const element = contentCreator.withoutLabel('input');
  expect(element.nodeName).toEqual('INPUT');
});

test('contentCreator creates dynamic html element with element type', () => {
  const element = contentCreator.withoutLabel('input', 'text');
  expect(element.type).toEqual('text');
});

test('contentCreator creates dynamic html element with a placeholder', () => {
  const element = contentCreator.withoutLabel('input', 'text', 'Enter a Name..');
  expect(element.placeholder).toEqual('Enter a Name..');
});

test('contentCreator creates dynamic html element with a class', () => {
  const element = contentCreator.withoutLabel('input', 'text', 'Enter a Name..', 'input_class');
  expect(element.classList.contains('input_class')).toEqual(true);
});

test('contentCreator creates dynamic html element', () => {
  const element = contentCreator.withoutLabelPlusValue('input');
  expect(element.nodeName).toEqual('INPUT');
});

test('contentCreator creates dynamic html element with a type', () => {
  const element = contentCreator.withoutLabelPlusValue('input', 'text');
  expect(element.type).toEqual('text');
});

test('contentCreator creates dynamic html element with a value', () => {
  const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!');
  expect(element.value).toEqual('Hello!');
});

test('contentCreator creates dynamic html element with a placeholder', () => {
  const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!', 'Enter a Name..');
  expect(element.placeholder).toEqual('Enter a Name..');
});

test('contentCreator creates dynamic html element with a class', () => {
  const element = contentCreator.withoutLabelPlusValue('input', 'text', 'Hello!', 'Enter a Name..', 'input_class');
  expect(element.classList.contains('input_class')).toEqual(true);
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.project).toEqual('Project1');
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.title).toEqual('Title1');
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.description).toEqual('Description1');
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.date).toEqual('Date1');
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.priority).toEqual('Priority1');
});

test('create list returns an object with assigned variables', () => {
  const newList = createList('Project1', 'Title1', 'Description1', 'Date1', 'Priority1', true);
  expect(newList.completed).toEqual(true);
});

test('update list returns an object with assigned variables', () => {
  const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
  expect(newList.project).toEqual('Project2');
});

test('update list returns an object with assigned variables', () => {
  const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
  expect(newList.title).toEqual('Title2');
});

test('update list returns an object with assigned variables', () => {
  const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
  expect(newList.description).toEqual('Description2');
});

test('update list returns an object with assigned variables', () => {
  const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
  expect(newList.date).toEqual('Date2');
});

test('update list returns an object with assigned variables', () => {
  const newList = updateInfo('Project2', 'Title2', 'Description2', 'Date2', 'Priority2');
  expect(newList.priority).toEqual('Priority2');
});

import { createList, updateInfo } from '../src/helpers/listLogic';

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

import contentCreator from '../src/helpers/contentCreator';

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
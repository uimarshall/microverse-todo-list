import capFirst from '../src/helpers/capFirst';

test('capitalize a string', () => {
  expect(capFirst('hello')).toEqual('Hello');
});

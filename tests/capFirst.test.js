import capFirst from '../src/helpers/capFirst';

describe('capFirst function', () => {
  test('capitalizes a string', () => {
    expect(capFirst('hello')).toEqual('Hello');
    expect(capFirst('hello')).not.toEqual('hello');
  });
});

import addSum from './index';

test('test case 1', () => {
  expect(addSum(0,2)).toBe(2);
});

test('test case 2', () => {
  expect(addSum(-1,5)).toBe(4);
});

test('test case 3', () => {
  expect(addSum(9,-2)).toBe(7);
});

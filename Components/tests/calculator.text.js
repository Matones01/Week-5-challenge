const { add, sub, multi, div } = require('../calc');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-3, 5)).toBe(2);
  expect(add(0, -7)).toBe(-7);
});

test('subs 10 - 3 to equal 7', () => {
    expect(sub(10, 3)).toBe(7);
    expect(sub(-10, 3)).toBe(-13);
    expect(sub(10, -3)).toBe(13);
  });

test('multiplies 7 * 10 to equal 70', () => {
    expect(multi(7, 10)).toBe(70);
    expect(multi(0, 10)).toBe(0);
    expect(multi(-5, -4)).toBe(20);
    expect(multi(11, -10)).toBe(-110);
  });

test('divides 30 / 6 to equal 5', () => {
    expect(div(30, 6)).toBe(5);
    expect(div(25, -5)).toBe(-5);
    expect(div(-14, -7)).toBe(2);
    expect(div(6, 0)).toBe(NaN);
    expect(div(0, 7)).toBe(NaN);
    expect(div(40, 0.5)).toBe(80);
  });


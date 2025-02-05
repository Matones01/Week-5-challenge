const { add, sub, multi, div } = require('../calc');

describe('Calculator Functions', () => {

  describe('Addition', () => {
    test('adds 2 + 3 to equal 5', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds -3 + 5 to equal 2', () => {
      expect(add(-3, 5)).toBe(2);
    });
    test('adds 0 + (-7) to equal -7', () => {
      expect(add(0, -7)).toBe(-7);
    });
  });

  describe('Subtraction', () => {
    test('subtracts 10 - 3 to equal 7', () => {
      expect(sub(10, 3)).toBe(7);
    });
    test('subtracts -10 - 3 to equal -13', () => {
      expect(sub(-10, 3)).toBe(-13);
    });
    test('subtracts 10 - (-3) to equal 13', () => {
      expect(sub(10, -3)).toBe(13);
    });
  });

  describe('Multiplication', () => {
    test('multiplies 7 * 10 to equal 70', () => {
      expect(multi(7, 10)).toBe(70);
    });
    test('multiplies 0 * 10 to equal 0', () => {
      expect(multi(0, 10)).toBe(0);
    });
    test('multiplies -5 * -4 to equal 20', () => {
      expect(multi(-5, -4)).toBe(20);
    });
    test('multiplies 11 * -10 to equal -110', () => {
      expect(multi(11, -10)).toBe(-110);
    });
  });

  describe('Division', () => {
    test('divides 30 / 6 to equal 5', () => {
      expect(div(30, 6)).toBe(5);
    });
    test('divides 25 / -5 to equal -5', () => {
      expect(div(25, -5)).toBe(-5);
    });
    test('divides -14 / -7 to equal 2', () => {
      expect(div(-14, -7)).toBe(2);
    });
    test('divides 6 / 0 to be NaN (division by zero)', () => {
      expect(div(6, 0)).toBeNaN();
    });
    test('divides 0 / 7 to be NaN (division by zero)', () => {
      expect(div(0, 7)).toBe(0);
    });
    test('divides 40 / 0.5 to equal 80', () => {
      expect(div(40, 0.5)).toBe(80);
    });
  });

});


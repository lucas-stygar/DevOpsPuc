const { somar, subtrair, multiplicar, dividir, ehPar } = require('./utils');

test('1. Deve somar dois números corretamente', () => {
  expect(somar(2, 3)).toBe(5);
});

test('2. Deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('3. Deve multiplicar dois números corretamente', () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test('4. Deve dividir dois números corretamente', () => {
  expect(dividir(20, 4)).toBe(5);
});

test('5. Deve identificar se um número é par', () => {
  expect(ehPar(8)).toBe(true);
  expect(ehPar(7)).toBe(false);
});
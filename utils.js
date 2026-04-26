function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : 'Erro'; }
function ehPar(numero) { return numero % 2 === 0; }

module.exports = { somar, subtrair, multiplicar, dividir, ehPar };
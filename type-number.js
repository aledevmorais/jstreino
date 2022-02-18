// tipo number
// sao os operadores +-/*
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero / segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante
// só colocar o ponto o js aceita isso 0.5 ou apenas .5
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;
const pontoFlutuanteComZero = 0.5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number (não é um número) erros operadores de matematica

const alura = "alura"

console.log (alura * primeiroNumero)

// divisão por 0 e valores infinitos 

var a = 10
var b = 0

console.log(a/b)
// retorna Infinity
var c = 0
var d = 0

console.log(c/d)
// retorna NaN


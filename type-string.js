const texto1 = "Olá Mundo";
const texto2 = 'Olá Mundo';
const senha = "senhaSuperSegura456!";
const StringdeNumeros = "34567";

// independente de ter numeros as aspas irão considerar tudo dentro como string

const citacao = 'O léo disse: "oi!"';
console.log(citacao)

//usar as aspas simples para identificar texto dentro as aspas

// concatenação de textos (+) só funciona para adicionar outros operadores nao funciona dessa forma (-/*)
const Nome = "Meu nome é"
const meuNome = " Alessandro"

console.log(Nome+meuNome)

// caracteres unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// o tique é importante " é tipo selecionado ativo"

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// tolowercase = identifica e converte  os caracteres em minusculos
const cidademin = "belo horizonte";
const inputmin = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidademin === inputMinusculo); // true = retorna dizendo que os caracteres da string são minusculos

// mais um exemplo de conversão de maisculo para minusculo

console.log('ALFABETO'.toLowerCase());

// return = alfabeto

const minhasenha = "minhaSenha123";

console.log(minhasenha.length)

//mostra quantos carcateres foram usados
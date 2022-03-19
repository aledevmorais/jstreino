const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido);

// return Leo diz: "por favor, quero beber cerveja" - porem não fica bom usar dessa forma com varios operadores
// pode causar confusão

// Template Strings: Utilizamos a sintaxe de acento grave + ${} em conjunto com aspas duplas ou simples

// poderemos usar ate booleanos para true e false no template String

// template literal 
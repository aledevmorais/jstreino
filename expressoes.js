function minhafuncao(param) {
    // bloco de codigo
}

minhafuncao("param");

// expressão de function

const soma = function(numero1, numero2) { 
    return numero1 + numero2}

console.log(soma(1,1));

// assumiu o 1+1=2

// criar uma const soma e fazer uma function

function apresentar() {
    return "olá Ale"
}
console.log(apresentar());

// vamos tentar executar uma function para apresentar erro de declaração

function somar() {
    return 2 + 1
}

console.log(somar());

// o resultado será 3 ok normal....agora iremos colocar console.log(soma()); antes da function

console.log(somardinovo());
function somardinovo() {
    return 5 + 1
}

// funciona do mesmo jeito return 6

// agora faremos o mesmo só que atraves de uma const

console.log(somar2(1, 2));
const somar2 = function(num1, num2) {
    return num1 + num2
}

// return error: ReferenceError: Cannot access 'somar2' before initialization
// por causa da const o console. log deve ser colocado após a function
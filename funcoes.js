let x = "";
console.log(x)
x = "oi";

// executado line por line mesmo a let tendo sida reatribuida com "oi"
// esta atribuido porem não foi exibido novamente

function imprimetexto(texto) {
    console.log(texto)
}

// não retorna erro o codigo esta certo mas não esta atribuido o texto
// function executa 1 ou mais vezes

imprimetexto("Agora foi exibido o console.log depois diferente do que aconteceu com a let");

// function obedeceu a atribuição posterior ao console.log
// mesmo se adicionar outr texto como abaixo

imprimetexto("Novo texto");



// function é uma declaração abre e fecha chaves

// o js tem 3 formas de escrever a function

function soma() {
    return 2 + 2;
}

console.log(soma());

// return ele fecha e armazena

const numero = Math.round(4.3);

console.log(numero);

// irá arredondar para 4

const numero1 = Math.round(3.85);

console.log(numero1);

// experimentar 3,85 -> 3 e 3.85 -> 4

const numero2 = Math.round(2.5);

console.log(numero2);

// return 3 pois irá arrendondar pra cima
// 0.5 a função arredonda para cima

// exemplos de match só declarar uma const e fazer os calculos

// Math.ceil(5.2) retorna 6 -> faz o arredondamento para o mais up
// Math.floor(5.2) retorna 5 -> arrendondar mais down
// Math.trunc(4.3) retorna 4 -> desconsidera os decimais
// Math.trunc(4.8) retorna 4 -> não importa os decimais vai  considerar somente o inteiro
// Math.pow(4 , 2) retorna 4^2 = 16 -> exponenciação
// Math.sqrt(64) retorna 8 -> raiz quadrada
// Math.min(0, 150, 30, 20, -8, -200) retorna -200 -> retorna o menor valor entre os argumentos e numeros
// Math.max(0, 150, 30, 20, -8, -200) retorna 150 - > return the max value

// exemplo math randomicos - escolher qualquer value de forma aleatória


const numero3 = Math.random(2, 5, 19, 38, 21, 12, 8, 17, 41, 26);

console.log(numero3);

// ira retornar qualquer valor aleatório não importa cadeia de dados


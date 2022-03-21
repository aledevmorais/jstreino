const apresentararrow = nome => `Meu nome é ${nome}`;

// sintaxe arrow function

const soma = (num1, num2) => num1 + num2;

// sintaxe arrow function para soma tudo numa linha só 
// sempre vem numa const
// se precisar de usar mais de uma linha só usar a chaves e return


const somanumerospequenos = (num3, num4) => {
    if (num3 || num4 > 10) {
        return "somente numeros de 1 a 9"
    }   else {
        return num3 + num4;
    }
}
// || operador de "ou"

// usar a arrow function por treino para orientar a objeto é melhor

// hoisting: arrow function se comporta como expressão

// Que com o hoisting o JavaScript analisa todo o código procurando
// por variáveis declaradas com var e funções para trazer tais declarações para o início do código.

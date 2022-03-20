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








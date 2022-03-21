// parametros de função

function soma1(numero1, numero2) {
    return  numero1 + numero2;
}
console.log(soma1(2,3))
console.log(soma1(351,-30))
console.log(soma1(20,30))
console.log(soma1(70,30))

// ira somar todos os resultado line by line

function nomeidade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeidade("Ale", 2022-1977));

function multiplica(numero3, numero4) {
    return numero3 * numero4;

}

console.log(multiplica(2022-1977, 2022-2016));

// return 270 

function multiplica1(numero5 = 12, numero6 = 12) {
    return numero5 * numero6;

}

console.log(multiplica1());

// todos os nomes que estão dentro das function não precisam ser substituidos 

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// return "oi gente"

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Alessandro')

//Dessa forma é possível reaproveitar a função com outro nome

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Aledevmorais');

// a function "oi gente" é adicionada na outra function + concatenação

function comParametro(param) {
    console.log(param)
}
comParametro()
// return undefined pois nenhum parametro foi passado
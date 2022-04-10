class Cliente {
    constructor(nomes, email, cpf, saldo){
    this.nomes = nomes
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }
// constructor definido da classe cliente
// EM CLASSE NÃO É PRECISO CHAMAR FUNCTION - VOCE SIMPLESMENTE DECLARA
// O JAVASCRIPT ja interpreta que é uma function, método
    depositar(valor){
        this.saldo += valor
    }
// metodo "depositar" que recebe um  parametro (valor)  
    exibirSaldo(){
        console.log( `O Saldo é ${this.saldo}`, ` do cliente ${this.nomes}`);
    }
// método "exibirSaldo" que recebe um parametro () que sera atribuido pela function {} escrita em chaves
// "console.log
    
}
// a const "variavel deve ser atribuida fora das chaves neste caso"
const alessandro = new Cliente ("Alessandro", "alessandro@controllermorais.com.br", "44455566678", 450 );

// não há a necessidade de escrever console.log(alessandro) pois
// o método exibirSaldo já chama a function com as suas definições como quiser
console.log(alessandro);
// esquematizando abaixo
alessandro.exibirSaldo()

// a sintaxe de classe começa com letra Maiscula - "LEMBRA DISSO"


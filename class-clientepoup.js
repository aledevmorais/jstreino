class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositarValor(valor) {
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo);
    }

    // atribuir herancas


}

class Clientepoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldopoupanca){
        super(nome, email, cpf, saldo)
        this.saldopoupanca = saldopoupanca
    }

    depositarpoupanca(valor){
        this.saldopoupanca += valor
    }


}

const alessandro = new Clientepoupanca("Alessandro", "alessandro@controllermorais.com.br", "99988844433", 100, 200)

    console.log(alessandro);
// Clientepoupanca {
//  nome: 'Alessandro',
//  cpf: 'alessandro@controllermorais.com.br',
//  email: '99988844433',
//  saldo: 100,
//  saldopoupanca: 200
//}

// Esquematizando :

// ele herdou da class Cliente (nome, cpf, email e saldo) pelo "extends" e adicionou 
// na class ClientePoupanca o saldo da contapoupanca
// atraves  do super trouxe todos os que chamamos da class Cliente

// criamos uma function dentro da class Clientepoupanca para receber no saldo da conta poupança
// um incremmento (valor) nesta conta especifica 

// - abaixo adcionaremos 1000 a conta principal e 5000 a conta ponpança vamos ver como ficara o saldo

alessandro.depositarValor(1000);
alessandro.depositarpoupanca(5000);

console.log(alessandro);

// }
//Clientepoupanca {
//    nome: 'Alessandro',
//    cpf: 'alessandro@controllermorais.com.br',
//    email: '99988844433',
//    saldo: 1100,
//    saldopoupanca: 5200
//  }

// -> perfeito a soma ocorreu com sucesso atraves das functions declararadas 
// na class e herdadas nas outras class
// a heranca são os dados basico do cliente que sao herdados sem ter que redigitar os dados do cliente
// que são os mesmos para ambas as contas

// Que classes e objetos são alguns dos principais conceitos da Programação Orientada a Objetos;

// Como utilizar uma classe como modelo para construir objetos com propriedades e métodos;

// Como utilizar a herança de classe com extends para criar objetos a partir de modelos específicos.

// o Javascript é uma linguagem baseada em prototipos

// oo é um paradigma de programação

function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ale = new ClientePoupanca("Alessandro", "29959969988", "alessandro@controllermorais.com.br", 100, 200)

console.log(ale);

//  ClientePoupanca {
//  nome: 'Alessandro',
//  cpf: '29959969988',
//  email: 'alessandro@controllermorais.com.br',
//  saldo: 100,
//  depositar: [Function (anonymous)],
//  saldoPoup: 200

// mas o saldo poupança tem no prototype uma definição para depositar na conta poupanca

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

// metodo "depositarPoup" atraves do prototype criamos uma fucntion (valor) para receber o incremento
// apartir do this.saldoPoup (somando)

ale.depositarPoup(250)
//para adicionar valor visto que "depositarPoup" já foi declarado na function acima

//apos esta declaração se pedirmos um console.log chamando ale.saldoPoup = saldo + incremento da function
//depositarPoup dando o total de 450 = saldoPoup 200 + depositarPoup 250 criando assim um novo saldoPoup

console.log(ale.saldoPoup)

// acessou prototype de clientePoupanca e adicionou a este um novo método "depositarPoup"
// linguagem baseada em protótipo - > JavaScript

// alem do nome e valor do nosso protótipo que são as propriedades herdadas
// o prototype tem também 3 atributos

// -> Writable : Define se a propriedade pode ser adicionada ou escrita a um objeto
// -> Enumerable : Define se a propriedade tem return em um loop (for..in) ou utlizando
// um Object.Keys() / Object.Values() / Object.entries() ou seja "enumerável"
// -> Configurable : especifica se a propriedade pode ser modificada ou deletada.

// -> por definição esta propriedades ja vem configuradas com o atributo (true), e vc pode
// especificar, enumerar ou configurar o seu atributo atraves de functions declaradas

// JAVASCRIPT -> OWN PROPERTY "propriedade própria"

// uma propriedade criada e não herdada -> possui os tres atributos  com o valor (true) ou seja:
// pode ser percorrida em um loop ou indexada a uma array


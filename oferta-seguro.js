const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
    fones: ["1199050505", "1199880505"],
    dependentes: [
        {
        nome: "Isabella Morais",
        parentesco: "filha",
        dataNasc: "21/06/2021" },
        {
        nome: "Isadora Morais",
        parentesco: "filha",
        dataNasc:"21/02/2022",
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}

// método object.keys() aonde cria uma array

const prosclientes = Object.keys(cliente)
console.log(prosclientes);

// js return array com todas as chaves do ojbect 

// 'nome',
//  'idade',
//  'cpf',
//  'email',
//  'fones',
//  'dependentes',
//  'saldo',
//  'depositar'

function oferecerSeguro(obj) {
    const prosclientes = Object.keys(obj);
    if(prosclientes.includes("dependentes"))
    {
        console.log(`Oferta de Seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);

// includes -> metodo de array do javascript
// o método includes -> return true or false
// se a condição do if for true ele entra no bloco de execução

// outro exemplo de exibição de arrays do método correspondente do Object.keys
// é o Object.values que pegar os valores de um objeto ao invés de responder uma array com as chaves 
// ele retorna a array com os valores

console.log(Object.values(cliente));

// outro importante forma de exibição para 
// Object.entries -> return uma array com varias arrays dentro dele 
// um conjunto de chaves e valores 
// aonde o indice 0 vai se referir a chave
// aonde o indice 1 vai se referer ao valor dessa chave
console.log(Object.entries(cliente));

// [ 'nome', 'Alessandro' ],
//  [ 'idade', 44 ],
//  [ 'cpf', '13113213334' ],
//  [ 'email', 'alessandro@controllermorais.com.br' ],
//  [ 'fones', [ '1199050505', '1199880505' ] ],
//  [ 'dependentes', [ [Object], [Object] ] ],
//  [ 'saldo', 100 ],
//  [ 'depositar', [Function: depositar] ]





const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
    fones: ["1199050505", "1199880505"]

}
// adicionar lista de dependentes

cliente.dependente = {
    nome: "Isabella",
    parentesco: "Filha",
    dataNasc: "21/06/2021",
}

console.log(cliente);

// return 
//nome: 'Alessandro',
//  idade: 44,
//  cpf: '13113213334',
//  email: 'alessandro@controllermorais.com.br',
//  fones: [ '1199050505', '1199880505' ],
//  dependente: { nome: 'Isabella', parentesco: 'Filha', dataNasc: '21/06/2021' }

// o dependente é um outro objeto { entre chaves}

// vamos tentar fazer uma alteração do object "cliente" dentro da propriedade "dependente"

cliente.dependente.nome = "Isabella Morais"

console.log(cliente.dependente.nome);

// return o nome alterado 

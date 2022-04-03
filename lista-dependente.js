//const cliente = {
//    nome: "Alessandro",
//    idade:44,
//    cpf: "13113213334",
//    email: "alessandro@controllermorais.com.br",
//    fones: ["1199050505", "1199880505"],
//    dependentes: {
//        nome: "Isabella Morais",
//        parentesco: "filha",
//        dataNasc: "21/06/2021",
//    }
//}
// adicionar mais um dependente na lista
// 1 passo : adicionar ao codigo acima aas colchetes - "uma array"


const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
    fones: ["1199050505", "1199880505"],
    dependentes: [{
        nome: "Isabella Morais",
        parentesco: "filha",
        dataNasc: "21/06/2021",
    }]

}

// após adicionar os colchetes ai sim pode adicionar as funções de array
// atraves do metodo push

cliente.dependentes.push({
    nome: "Isadora Morais",
    parentesco: "filha",
    dataNasc:"21/02/2022",
})

console.log(cliente);

// o javascript retorna alessandro com os seus dados e suas duas filhas tudo normal

// agora uma nova solicitar retornar somente a filha mais velha
// fazendo um filtro e retornando a data de nascimento mais antiga ou recente conforme a opção

const filhaMaisVelha = cliente.dependentes.filter(minhafilha => minhafilha.dataNasc === "21/06/2021")

// metodo filter retornar a posição da array

console.log(filhaMaisVelha[0].nome);
// metodo filter é um metodo de array do javascript
// ele acessa a chave de cada um dos objetos e compara com  a solicitação da function
// [0] todos os nomes deste item 
// return "Isabella Morais" === 21/06/2021 que foi a function acionada
// estrutura de dados de objetos -> arrays dentro de objetos também


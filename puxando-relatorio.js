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

// puxando relatório - acima tem uma lista não ordenada

// método for in que é para objetos
// como percorrer os indices do objeto
let relatorios = " ";
//let info in dentro de cliente
for(let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else {
        relatorios += `
        ${info} ==> ${cliente[info]} 
        `
    }
}
console.log(relatorios);

//nomeidadecpfemailfonesdependentessaldodepositar
// o js retorna atraves da info o nome de cada chave do nosso objeto
// this return dados primitivos

// precisa if -> typeof (tipo de dado )

// relatorios += `
//${info} ==> ${cliente[info]}
//`

// atraves disso podemos quebrar a linha para melhorar a visualização

// guardar "incrementar dentro da variavel relaório o else"

// a anotação de [info] é para não ter que digitar .nome .idade e outros do mesmo objeto
// ai o js ira percorrer todos os itens desse object
// metodos para percorrer objects 
// porque o js interpretou o nossos arrays  como object ?? Estudar

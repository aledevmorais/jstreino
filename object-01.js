const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
}
console.log(cliente.nome);
// return alessandro normal ok
console.log(`Meu nome é : ${cliente.nome.toUpperCase()} e tenho a idade de ${cliente.idade} anos.`);

// função substring

console.log(cliente.cpf.substring(0,3))

// posso selecionar os três primeiros numeros do cpf aonde 0 é indice e 3 são os tres primeiros itens a partir
// do indice 0 quer dizer que se u selecionar o indice 4 ele ira adicionar a partir do 4 elemento.


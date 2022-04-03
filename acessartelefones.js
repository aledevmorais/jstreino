//const cliente = {
//    nome: "Alessandro",
//    idade:44,
//    cpf: "13113213334",
//    email: "alessandro@controllermorais.com.br",
//}

// objeto poder ser compostos por arrays
// vamos create add new item no object
const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
    fones: ["1199050505", "1199880505"]

}
cliente.fones.forEach(fone => console.log(fone))
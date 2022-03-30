const notas = [10, 9, 8, 7, 6];

const notasAtulizadas = notas.map( nota => nota + 1)

console.log(notasAtulizadas);

// return nota 11
// nota  + 1 ou nota ++ " vai adicionar um do mesmo jeito"
// ++nota se não adicionar

// map

const notas1 = [10, 9, 8, 7, 6];

const notasAtulizadas1 = notas1.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtulizadas1);

// retorno de map uma array atualizada salvando uma nova variavel "notasatualizadas1"
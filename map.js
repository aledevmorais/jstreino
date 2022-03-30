let nomes = [ 'Ana júlia', 'Caio vinicius', 'BIA silva' ];

const nomesAtualizados = nomes.map( nome => nome.toUpperCase());

console.log(nomesAtualizados);

// [ 'ANA JÚLIA', 'CAIO VINICIUS', 'BIA SILVA' ]
// o js retornou todos os nomes com letra maiscula

// map executa funções para strings

// Selecione a alternativa que representa a diferença entre o método map() e forEach():

// Enquanto o método forEach não tem um retorno,
// o método map() pode retornar um array se a função informada tiver um return em seu escopo.
const listaDeChamada = ['João', ' Ana', ' Caio', ' Lara', ' Marjorie', ' Leo'];

listaDeChamada.splice(1,2, ' Rodrigo')

console.log(`Lista de Chamada: ${listaDeChamada}`)


// remove elemts to array for array conforme indice

// return Lista de Chamada: João, Rodrigo, Lara, Marjorie, Leo -> saiu (1) Ana e (2) Caio conforme splice

const listaDeChamada01 = ['João', ' Ana', ' Caio', ' Lara', ' Marjorie', ' Leo'];

listaDeChamada01.splice(2,0, ' Rodrigo')

console.log(`Lista de Chamada: ${listaDeChamada01}`)

// quando adicionar o (0) como parametro não será substituido o item da lista e sim adicionado conforme condition

// prestar atenção que a array original será substituida

// Lista de Chamada: João, Ana, Rodrigo, Caio, Lara, Marjorie, Leo

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')
console.log(animaisDoAquario)
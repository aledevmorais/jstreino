// operador ternario tipo um if deixando mais curto o codigo

const idademinima = 18;
const idadecliente = 16;

// comparar condicionais

if (idadecliente >= idademinima) {
    console.log("cerveja")
} else {
    console.log("suco");
}
// o return será suco visto que não atendeu as condições da loja para vender a cerveja

const idademinima1 = 18;
const idadecliente1 = 16;

console.log (idadecliente1 >= idademinima1 ? "cerveja" : "suco" );

// operador ternário - varias condições é melhor com "if" do que que comparador ternário "?"

// porque chama operador ternário -> ">=" , "?" ":" são utilizados 3 operadores por isso ternário


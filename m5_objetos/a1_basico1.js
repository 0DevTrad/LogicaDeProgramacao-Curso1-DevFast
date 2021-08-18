let x = 3;
let y = [];

//O comando abaixo verifica se a variável/constante é ou não um array.
console.log(Array.isArray(x)); //false
console.log(Array.isArray(y)); //true

let a = {};

console.log(Array.isArray(a)); // false
console.log(typeof a); // object

const numeros = [10, 20, 30];
const produto = {
    nome: 'Caneta',
    preco: 9.99,
    desconto: 0.2
};

console.log(numeros[0]); // Como acessar uma posição dentro de um array.
console.log(produto['nome']); // Como acessar um atributo de um objeto.

console.log(produto.nome); // Essa é a forma mais comum.
console.log(produto.preco); 
console.log(produto.desconto); 
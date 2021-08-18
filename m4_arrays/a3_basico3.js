
console.log(typeof console); // Object
console.log(typeof console.log); // function // método é a função dentro do objeto.

const numeros = [1, 2, 3];

console.log(typeof numeros); // Object

// A função(método) .push permite adicionar novos dados dentro do array.

numeros.push(4);
numeros.push(5);
numeros.push(10.98);

console.log(numeros); // [1, 2, 3, 4, 5, 10.98]
console.log(numeros.length); //6

// .length é um atributo que nos retorna o tamanho do nosso array.
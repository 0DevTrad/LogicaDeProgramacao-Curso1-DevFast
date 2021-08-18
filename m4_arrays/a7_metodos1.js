const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100; // Alterar um elemento
numeros.push(6); // Adicionar um elemento


const numeros2 = numeros.concat(7, 8, 9); // vai gerar uma nova array junto com a array original.

console.log(numeros);
console.log(numeros.join(', ')); 
// O .join permite adicionar algo a todos os elementos como uma string, nesse caso uma ', '

console.log(numeros.includes(10)); //false  // diz se o elemento pertence ou não ao array 
console.log(numeros.includes(3)); //true

console.log(numeros.indexOf(4)); //Índice 3

console.log(numeros2);


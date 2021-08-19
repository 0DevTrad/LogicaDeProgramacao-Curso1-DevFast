const i = 2;
const j = 4;

console.log("i = " + i + ", j = " + j);
console.log('i = ' + i + ', j = ' + j);

console.log(`i = ${i}, j = ${j}`);  //template string

console.log(`1 + 2 = ${1 + 2}`);
console.log(`Valor gerado foi: ${Math.random()}`);

console.log('1 + 2 = ${1 + 2}'); // Com aspas simples não vai funcionar
console.log("1 + 2 = ${1 + 2}"); // Nem com aspas duplas.


// O template string é usado quando você quer concatenar strings e números de maneira mais prática.
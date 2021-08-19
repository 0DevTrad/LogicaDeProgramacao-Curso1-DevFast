/* 
    Objetivo do desafio é passar o valor da
    variável a para a variável b e passa o 
    valor da variável b para a.
*/

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

/*
    Uma outra forma seria: 
    [a, b] = [b, a]
*/

console.log(a);
console.log(b);

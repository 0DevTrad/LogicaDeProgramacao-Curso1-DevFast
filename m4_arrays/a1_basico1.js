//              0    1    2   3    4    5 
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3]);
console.log(notas[5]);

notas[4] = 8.7; //Alterando um elemento do array.

/*
    Mesmo o array estando dentro de uma constante, é possível modificar os
    elementos dentro do array, porém, não é possível modificar a existência 
    do array dentro da constante.
*/

console.log(notas);
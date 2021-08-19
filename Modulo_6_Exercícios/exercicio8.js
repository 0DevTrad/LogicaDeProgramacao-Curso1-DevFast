/*
    Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
    multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(n1, n2) {
  return n1 >= 0 && n2 >= 0 ? Math.imul(n1, n2) : 0;
}

console.log(multiplicar(10, 5)); // 50
console.log(multiplicar(10, -5)); // 0

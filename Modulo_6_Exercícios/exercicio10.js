/*
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o 
    elemento que repetirá, enquanto que o segundo será o número de vezes que
    haverá repetição. Um array será retornado.
*/

function repetir(elemento, quantidade) {
  const resultado = [];

  for (let i = 0; i < quantidade; i++) {
    resultado[i] = elemento;
  }
  return resultado;
}

console.log(repetir("abacaxi", 5));

// Outra forma:

function repetir2(elemento, quantidade) {
  const resultado = [];

  for (let i = 0; i < quantidade; i++) {
    resultado.push(elemento);
  }
  return resultado;
}

console.log(repetir2("maça", 5));

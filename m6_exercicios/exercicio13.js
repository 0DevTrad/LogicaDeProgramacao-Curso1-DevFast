/*
    Crie uma função que receba um array de elementos e retorne um array
    somente com os números presentes no array recebido como parâmetro.
*/

function filtrarNumeros(dados) {
  const numeros = [];

  for (let i = 0; i <= dados.length; i++) {
    if (typeof dados[i] === "number") {
      numeros.push(dados[i]);
    }
  }
  return numeros;
}

console.log(filtrarNumeros([0, 1, 2, "banana", 4, "maça", "abacaxi", 10]));

// OBS: numeros[i] = dados[i] irá retornar os indices que não são números como <empty item>.

// Outra forma:

function filterNumbers(array) {
  const resultado = [];

  for (let item of array) {
    if (typeof item === "number") resultado.push(item);
  }
  return resultado;
}

console.log(filterNumbers([50, 75, "papel", 100, "caneta"]));

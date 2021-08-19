/*
    Crie uma função que receba uma array e retorne o primeiro e o último 
    elemento desse array como um novo array.
*/

function retornaPrimeiroEUltimo(array) {
  let primeiroElemento = array[0];
  let ultimoElemento;

  for (let i = 0; i < array.length; i++) {
    ultimoElemento = array[i];
  }

  return [primeiroElemento, ultimoElemento];
}

console.log(retornaPrimeiroEUltimo([5, 2, 3, 4, 5, "dudi", "claudio"]));

// Outra forma:

function retornaPrimeiroEUltimo2(array) {
  const primeiroElemento = array.shift();
  const ultimoElemento = array.pop();

  return [primeiroElemento, ultimoElemento];
}

console.log(retornaPrimeiroEUltimo2([10, 20, 30, "Flamengo"]));

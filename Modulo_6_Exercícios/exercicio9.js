/*
    Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
    quantidade especificada no parâmetro.
*/

function retornaSimboloMais(n1) {
  let resultado = "";

  for (let i = 0; i < n1; i++) {
    resultado += "+";
  }
  return resultado;
}

console.log(retornaSimboloMais(7)); // +++++++

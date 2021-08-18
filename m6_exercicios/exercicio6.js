/*
    Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro 
    fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo,
    se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno
    será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o 
    parâmetrode entrada não for de nenhum dos tipo acima, retorne "booleano ou número 
    esperados, mas o parâmetro é do tipo ...".
*/

function booleanoOuNumerico(valor) {
  if (valor == true || valor == false) {
    return valor !== true ? true : false;
  } else if (valor >= 0 || valor <= 0) {
    return valor * -1;
  } else {
    return "booleano ou número esperados, mas o parâmetro é do tipo string";
  }
}

console.log(booleanoOuNumerico(true)); // false
console.log(booleanoOuNumerico(false)); // true

console.log(booleanoOuNumerico(10)); // -10
console.log(booleanoOuNumerico(-50)); // 50

console.log(booleanoOuNumerico("abecedário")); // booleano ou número esperados, mas o parâmetro é do tipo string

// Outra forma de resolver:

function inverso(dado) {
  const tipo = typeof dado;

  if (tipo == "boolean") {
    return !dado;
  } else if (tipo == "number") {
    return -dado;
  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${dado}`;
  }
}

console.log(inverso(true)); // false
console.log(inverso(false)); // true

console.log(inverso(10)); // -10
console.log(inverso(-50)); // 50

console.log(inverso("abecedário")); // booleano ou número esperados, mas o parâmetro é do tipo string

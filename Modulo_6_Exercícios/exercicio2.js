/*
    Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

    Obs: Considere que um ano tem 365 dias. Desconsidere anos bissextos (com 365 dias) e desconsidere
    também dias decorridos desde o último aniversário.

*/

function converterIdadeEmDias(idade) {
  return idade * 365;
}

console.log(converterIdadeEmDias(25)); // 9125
console.log(converterIdadeEmDias(70)); // 25550

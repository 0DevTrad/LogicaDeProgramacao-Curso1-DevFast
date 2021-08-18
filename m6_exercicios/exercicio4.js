/*
    Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
    Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

*/

function receberNomeDoMes(numeroMes) {
  switch (numeroMes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubroo";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Digite um número entre 1 e 12";
  }
}

console.log(receberNomeDoMes(1)); // Janeiro
console.log(receberNomeDoMes(2)); // Fevereiro
console.log(receberNomeDoMes(3)); // Março
console.log(receberNomeDoMes(4)); // Abril
console.log(receberNomeDoMes(5)); // Maio
console.log(receberNomeDoMes(6)); // Junho
console.log(receberNomeDoMes(7)); // Julho
console.log(receberNomeDoMes(8)); // Agosto
console.log(receberNomeDoMes(9)); // Setembro
console.log(receberNomeDoMes(10)); // Outubro
console.log(receberNomeDoMes(11)); // Novembro
console.log(receberNomeDoMes(12)); // Dezembro

console.log(receberNomeDoMes(15)); // Digite um número entre 1 e 12
console.log(receberNomeDoMes(0)); // Digite um número entre 1 e 12

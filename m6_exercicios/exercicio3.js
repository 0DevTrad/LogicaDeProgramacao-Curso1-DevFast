/*
    Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
    por um funcionário num mês, e o quanto ele recebe por hora. A função deverá calcular o 
    salário líquido mensal do funcionário, que é da quantidade de horas trabalhadas no mês 
    multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a 
    impostos. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o 
    quanto o funcionário ganhou no mês.
*/

function calcularSalario(horasTrabalhadas, valorHora) {
  const salarioBruto = horasTrabalhadas * valorHora;
  const salarioLiquido = salarioBruto - salarioBruto * 0.3;
  return `Salário igual a R$ ${salarioLiquido}`;
}

console.log(calcularSalario(150, 40.5)); // Salário igual a R$ 4252.5
console.log(calcularSalario(10, 100)); // Salário igual a R$ 700

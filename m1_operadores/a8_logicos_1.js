let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai prp shopping? ';
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);

let resultadoOU = '#2 (OU)- Vai pro shopping? '
resultadoOU += carroEstaNaGaragem || estaEnsolarado;

console.log(resultadoOU);

//OU exclusivo

console.log(true != true);
console.log(true != false);
console.log(false !== true);
console.log(false !== false);

//Operador de negação lógico unário;

console.log('Não verdadeiro: ' + !true);
console.log('Não verdadeiro: ' + !false);

// #1: Função COM parâmetro e COM retorno.
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);

console.log(resultado);                     // Opção 1
console.log(somar(30, 56));                 // Opção 2
console.log(`resultado: ${resultado}`);     // Opção 3
console.log(`resultado: ${somar(30, 56)}`); // Opção 4

// #2: Função COM parâmetro e SEM retorno.
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);

// #3: Função SEM parâmetro e COM retorno.
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM parâmetro e SEM retorno.
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();
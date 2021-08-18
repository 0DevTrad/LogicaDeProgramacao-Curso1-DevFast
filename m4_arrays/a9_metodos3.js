const numeros = [10, 20, 30, 40, 50, 60];

/*
#1º Forma

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

#2º Forma
for(let n of numeros) {
    console.log(n)
}

*/

numeros.forEach(function() {
    console.log('Dentro do forEach!')
});

console.log('\n'); // Só pra dar uma quebra de linha

/*
    Para cada elemento dentro do array ele vai chamar essa função
    que você passou como parâmetro dentro do forEach
*/

//Outra forma de escrever a mesa função de cima:

function praCadaElemento1() {
    console.log('Dentro do ForEach versão 2!')
}
numeros.forEach(praCadaElemento1);

/*
    Outra funcionalidade é poder passar parâmetros, 
    o 1º parâmetro sempre será um elemento, o 2º é o 
    índice e o 3º parâmetro o array completo:

    OBS: os nomes chamados nos parâmetros podem ser
        alternados mas a funcionalidade permanece.
*/

console.log('\n'); // Só pra dar uma quebra de linha

function praCadaElemento2(elemento, indice, array) {
    console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento2);

console.log('\n'); // Só pra dar uma quebra de linha

// Passando como função anônima
numeros.forEach(function(el) {
    console.log(el);
});

console.log('\n'); // Só pra dar uma quebra de linha

//Caso eu só queira o índice sem o elemento, basta imprimir apenas o i (segundo parâmetro):

numeros.forEach(function(el, i) {
    console.log(i);
});

/*
    Como convenção os devs passam o _ em parâmetros
    que são obrigatórios mas não irão ser usados.

    O _ é um valor válido, mas é uma forma de dizer
    pro vscode que você não está se importando.
*/
console.log('\n'); // Só pra dar uma quebra de linha

numeros.forEach(function(_, i) {
    console.log(i);
});



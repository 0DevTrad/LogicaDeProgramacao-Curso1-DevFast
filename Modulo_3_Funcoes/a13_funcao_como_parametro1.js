/* 

function executar(funcao) {
    funcao();
}

executar(3);


    O comando acima não irá executar, porque
    funcao() não é uma function. 
        
    É como se chamar:
    
    function executar(funcao) {
        3();
    }
*/

/*
function executar(funcao) {
    if (typeof funcao === "function") {
        funcao();
    }
}

executar(3);

Agora não irá dar problema, já que o typeof fez a validação.

*/


function executar(param) {
    if (typeof param === "function") {
        console.log(param()); // <--- Parte central da aula
    }
}

function bomDia() {
    return "Bom dia";
}

executar(bomDia()); // Não vai imprimir nada 

/*
     Isso acontece porque ao chamar a função
    bomDia() você está chamando o resultado dela
    ou seja, o "Bom dia", que está dentro da 
    função bomDia().

    Para chamar a função como parâmetro para
    executar, você deve chamar a o nome da função
    sem parênteses, ou seja, bomDia
*/

executar(bomDia); // <--- Parte central da aula  // Vai imprimir "Bom dia".


const x = bomDia; // Eu apontei a função bomDia para a constante x
const y = bomDia();

console.log(x); // Vai dizer que x é uma função.
console.log(x()); // Vai retornar "Bom dia"

//console.log(y()); // Vai dizer que y não é uma função. y é um texto.
console.log(y); // retornar "Bom dia"
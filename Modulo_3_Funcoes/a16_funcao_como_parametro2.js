function  executar(fn, n1 = 10, n2 = 15) { //função, parâmetro 1, parâmetro 2
    if(typeof fn === 'function') {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
executar(dividir, 90, 50);

executar(somar); //Vai executar a função soma com os valores padrões da função executar.

/*
    A função executar é uma função que recebe um parâmetro fn.
    Se esse parâmetro for uma função, ele executar a função 
    passada como parâmetro.

    A mesma função executar outras funções.
*/
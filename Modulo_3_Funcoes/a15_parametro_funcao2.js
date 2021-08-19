// Valor Padrão para um parâmetro.

function somar(a = 0, b = 0, c = null, d = 0) {
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim!');

/*  
    Todos esses consoles retornarão NaN
    por ter menos parâmetros que a função.

    console.log(somar(1, 2, 3));
    console.log(somar(1, 2));
    console.log(somar(1));
    console.log(somar());

    Como fazer para resolver isso?

    Você define dentro da função que caso
    determinado valor não seja passado, ele será
    igual a zero.

    Antes:

    function somar(a, b, c, d) {
    return a + b + c + d;
    }

    Depois:

    function somar(a, b, c, d = 0) {
    return a + b + c + d;
    }

    OU:

    function somar(a = 0, b = 0, c = null, d = 0) {
    return a + b + c + d;
    }


*/

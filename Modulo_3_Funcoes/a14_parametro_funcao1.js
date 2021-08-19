function somar(a, b, c, d) {
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); // Vai retornar NaN.

/*
    Quando você não passar o mesmo número de
    parâmetros que a função possui, o parâmetro
    que não foi passado receberá undefined.

    Exibirá no console Nan
*/


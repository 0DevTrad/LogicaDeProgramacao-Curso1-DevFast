function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 4));

/*
    Currying é o processo de tranformar uma função que espera 
    vários argumentos em uma função que espera um único argumento.

    Currying é um princípio de programação funcional.
*/

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(5)(4));

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));

/*
    Acima, pode-se ver um exemplo onde somarMais10 recebe
    a função somar2 com a = 10 e na hora de chamar no console
    usa-se a constante mais o valor de "b" que se quer atribuir,
    tendo a já o valor de 10 atribuído anteriormente.
*/

/*
    Conseguir fatiar uma função em vários pedaços pode ser
    útil em alguns casos, um exemplo é o de descontar ou adicionar
    um imposto.
*/
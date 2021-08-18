let a = 1;
let b = 2;

console.log(++a === b++);

/* 
    O ++a tem precedência em relação ao b++.
    porque primeiro tem o operador na frente.
    Nesse caso, a expressão incrementa a depois
    compara com b que vale 2 e depois incrementa
    + 1 por isso a comparação entre ++a e b++ é true.
*/


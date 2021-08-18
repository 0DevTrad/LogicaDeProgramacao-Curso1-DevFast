function semRetorno() {
    console.log('Função foi chamada!');
}

let a = 3;
let b = a * 7 + 10;
let c = semRetorno();
let d;

console.log(a, b, c, d);

/*
    Quando você não diz que uma função retornará algo
    explícito, ela retornará undefined, da mesma forma
    quando você define uma variável e não inicializa ela.
*/
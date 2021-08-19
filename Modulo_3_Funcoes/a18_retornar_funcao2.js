function retornaUmafuncao() {
    return function () {
        return function () {
            return 'Boa tarde!';
        }
    }
}

/*
    Podemos retornar uma função anônima.
*/

console.log(retornaUmafuncao);      //[Function: retornaUmafuncao]
console.log(retornaUmafuncao());    //[Function (anonymous)]
console.log(retornaUmafuncao()());  //[Function (anonymous)]
console.log(retornaUmafuncao()()());  //Boa tarde!
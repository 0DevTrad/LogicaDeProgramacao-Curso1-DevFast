const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// #1 Forma de percorrer o array
for(let i = 0; i < 6; i++) {
    //console.log(numeros[i]);
}

/* 
    O ponto negativo é que se eu adicionar um novo elemento no array,
    o for não conseguirá ler pois a condição é i < 6.

    Para resolver esse problema podemos usar: numeros.length para 
    pecorrer todo o array.
*/

// #2 Forma de percorrer o array
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
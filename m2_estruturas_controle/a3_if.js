const nota = 3;

if (nota >= 9)
    console.log('Quadro de Honra!');
    console.log('Parabéns!');

/*
    Se a nota for 3 somente o 'Parabéns!' será impresso
    no console. Isso ocorre porque o if executa a 
    próxima sentença ou bloco de código. No caso, como
    a expressão retorna false ele não executa a próxima
    sentença que seria 'Quadro de Honra!'.
*/

if (nota >= 9) {
    console.log('Quadro de Honra!');
    console.log('Parabéns!');
}

console.log('Fim!');

/*
    Nesse segundo exemplo, nenhuma das expressões será 
    impressa porque a próxima coisa que aparece depois 
    do if é um bloco de código que contém as duas
    expressões.    
*/
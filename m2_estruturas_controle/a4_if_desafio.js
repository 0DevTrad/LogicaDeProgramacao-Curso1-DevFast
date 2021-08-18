//Descubra porque o código não funciona

const nota = 2.3;

if (nota >= 9); {
    console.log('Quadro de Honra!');
    console.log('Parabéns!');
}

console.log('Fim!');

/* 
    O erro está no ";" antes dos parênteses.
    A próxima coisa após a expressão do if que
    foi encontrada foi o ";"
*/
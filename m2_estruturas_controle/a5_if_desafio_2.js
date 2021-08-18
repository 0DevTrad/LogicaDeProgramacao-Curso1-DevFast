/*
    Exiba os conceitos da tabela de acordo com a nota

    CONCEITO        Faixa de nota 
                    correspondente

        A           Entre 9,0 e 10,0
        B           Entre 7,0 e 8,9
        C           Entre 5,0 e 6,9
        D           Entre 4,5 e 4,9
        F           Abaixo de 4,5
*/

const nota = 7.5;

if (nota <= 10 && nota >= 9) {
    console.log('A');
}

if (nota < 9 && nota >= 7) {
    console.log('B');
}

if (nota < 7 && nota >= 5) {
    console.log('C');
}

if (nota < 5 && nota >= 4.5) {
    console.log('D');
}

if (nota >= 0 && nota < 4.5) { //Para não aceitar valores negativos
    console.log('F');
}

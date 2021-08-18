let nota = 11;

//Math.ceil arredonda o número para cima.
switch(Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6:
    case 5:
        console.log('Recuperação!');
        break;
    case 4:    
    case 3:
    case 2:
        console.log('Reprovado!');
        break;
    case 1:
    case 0:
        console.log('Muito Reprovado!');
        break;
    default:
        console.log('Nota inválida');
}

console.log('Fim!');

/*
    Eu consigo colocar um case seguido de outro,
    inclusive na mesma linha se eu quiser.

    O break é usado para que possa parar o código,
    sem ele, o switch executará do case 10 ao 7,
    imprimirá no console 'Parabéns!', depois
    executará o case 6 e 5 e im´rimirá 'Recuperação!'
    e assim por diante.

    O default é usado para dar uma resposta caso o dado
    não se encaixe em nenhum dos cases. Ele não é 
    obrigatório para que o código funcione, mas é uma boa
    prática para deixar o programa redondo.

    O switch é uma estrutura de controle serve para múltiplas
    selecções mao ao invés de passar um valor boolean, você insere
    um valor e pode contemplar ele com inúmeros cases.
*/
/*
    Sistema de cálculo de nota:

    Deverá calcular a média do aluno considerando apenas
    as duas maiores notas e retornar os seguintes status:

    Aprovado -> >= 7
    Recuperação -> >= 4
    Reprovado -> < 4
*/

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function menor(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = menor(nota1, menor(nota2, nota3));

    if(menorNota === n1) {
        return (n2 + n3)/2;
    } else if(menorNota === n2) {
        return (n1 + n3)/2;
    } else {
        return (n1 + n2)/2;
    }
}

//console.log(media(nota1, nota2, nota3));

function conceito(media) {
    if (media >= 7){
        return 'Aprovado';
    } else if (media >= 4) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const conceitoFinal = conceito(mediaFinal);
console.log(`O resultado final é: ${conceitoFinal}`);
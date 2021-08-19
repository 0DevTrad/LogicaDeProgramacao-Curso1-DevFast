//break
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        break;
    }
    console.log(i); // 1, 2
}

//continue
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i); // 1, 2, 4, 5
}

/*
    O break vai fazer com que a execução saia do
    contexto atual, o contexto atual no caso é o 
    primeiro laço for.

    O break é utilizado no contexto do switch, o
    continue não.

    o continue interrompe a repetição atual, ele vai
    pra próxima repetição mas não irá finaliza/ sair
    do laço for.

    O continue só é usado no caso do While e no caso do
    for.
*/
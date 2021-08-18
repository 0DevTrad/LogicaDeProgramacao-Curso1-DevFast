if(true) {
    console.log('Exec...');
}
else
    console.log('Não exec...');

if(false)
    console.log('Não exec...');
else{
    console.log('Exec...');
}

/*
    Acima true e false são literais, por isso
    o 1º else e nem o 2º if não é executado.

    É possível usar também if com sentença e else
    com bloco e vice-versa, mas isso não é uma boa
    prática.
*/
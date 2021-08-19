// for(;;) {}  // Uma forma de criar um laço for infinito

//for(;true;) {} // Outra forma de criar um laço infinito

let controle = 1;

for (; controle <= 10;) {
    console.log(controle);
    controle++;
}

console.log('Fim!');

/*
    Deixando o primeiro e o terceiro parâmetro sem nada,
    o código irá funcionar, sendo as partes não obrigatórias,
    mas essa não é uma forma utilizada no dia a dia.
*/
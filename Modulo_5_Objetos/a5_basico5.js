const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital X',
            'Shopping Y',
        ]
    },
    nomeFilhos: ['Bia, Carlos, Gabriel']
};

// Aqui estou acessando o logradouro que pertence ao endereco que por sua vez, pertence ao cliente.
console.log(cliente['endereco']['logradouro']);
// Aqui uma outra forma de acessa de maneira mais simples, mais usada:
console.log(cliente.endereco.logradouro);

//Aqui estou acessando a array pontoRef que pertence ao objeto endereco que pertence ao objeto cliente.
console.log(cliente.endereco.pontosRef[1]);

/*
    É possível colocar objetos dentro de arrays também:
*/

const empresa = {
    nome: 'Apple',
    origem: 'EUA',
    pracas: [
        {nome: 'Brasil', funcionando: true},
        {nome: 'Russia', funcionando: true},
        {nome: 'China', funcionando: false},
    ]
};

console.log(empresa.nome);
console.log(empresa.origem);
console.log(empresa.pracas);

//Caso eu queira ter alguma validação: 
console.log(empresa.pracas[0].funcionando);
console.log(empresa.pracas[2].funcionando);

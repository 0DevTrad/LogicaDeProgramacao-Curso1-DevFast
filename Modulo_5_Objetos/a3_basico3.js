const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

//Como eu faço para alterar um atributo dentro de um objeto:

data.dia = 24;
data.mes = 12

/*
    data continua sendo uma constante o que não é possível alterar,
    mas os seus atributos são alteráveis, igual no array.
*/


console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

// Ou:

console.log(`${data.dia}/${data.mes}/${data.ano}`);


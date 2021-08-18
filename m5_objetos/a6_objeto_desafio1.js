/*
    Criar um objeto data, com 3 atributos, dia, mês e ano.
    Ele deve ter um método exibir e retornar uma string com o 
    dia, mês e ano.
*/

// Forma como eu resolvi:
const data = {
    dia: 17,
    mes: 08,
    ano: 2021,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

console.log(data.exibir())

// Forma do professor:

const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(nascimento.mes);
console.log(nascimento.exibir());
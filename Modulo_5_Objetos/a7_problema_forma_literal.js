const d1 = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 22,
    mes: 11,
    ano: 2023,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 3,
    mes: 4,
    ano: 2022,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

/*
    O problema da forma literal é a repetição de código,
    você constrói muitas linhas de código para definir um objeto,
    se for ter mais métodos terá mais duplicações de código.

    O ideal é sempre buscar ter reúso de código, isso será visto
    nas próximas aulas.
*/
/*
    Uma forma de resolver o problema da forma literal visto na aula anterior:
    
    Abaixo eu criei uma função com os parâmetros dia, mes, ano e na hora de retornar
    as chaves, coloquei esses parâmetros apontados para as respectivas chaves.
*/
function criarData(dia, mes, ano) {
    return {
        dia: dia,   // chave: parâmetro
        mes: mes,   // chave: parâmetro
        ano: ano,   // chave: parâmetro
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
};

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(3, 4, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

/*
    Dessa forma eu consigo chegar ao mesmo objetivo
    reaproveitando o código e deixando ele muito mais
    simples o que permite fácil compreensão e manuntenção.
*/
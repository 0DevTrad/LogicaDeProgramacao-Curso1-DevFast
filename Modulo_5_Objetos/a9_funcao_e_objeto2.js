/*
    Usando o exemplo da aula anterior, para simplificar ainda
    mais o código é possível retirar o parâmetro depois da chave
    pois a chave já se referencia ao parâmetro da função criarDara:

    ANTES:          DEPOIS:
    dia: dia,       dia,
    mes: mes,       mes,
    ano: ano,       ano,

    Uma outra simplificaçãp que se pode fazer é da função no 
    atributo "exibir":

    ANTES:

        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;

    DEPOIS:
    
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;

*/

function criarData(dia, mes, ano) {
    return {
        dia,   
        mes,  
        ano,
        exibir() {
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

// Caso haja dúvida na compreensão dessa aula, comparar com a aula a8.
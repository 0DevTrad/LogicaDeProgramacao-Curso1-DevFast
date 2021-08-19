/* Função Contrutora cria Objeto. (semelhante a uma classe de outras linguagens) 
   Como convenção o nome da função construtora é escrito com a primeira letra maiúscula.
*/

function Produto() {
    console.log(this);
}

//produto(); //Vai apontar pra um objeto global. //No navegador vai mostrar window.

const p1 = new Produto(); // Vai mostrar um objeto do tipo produto.

console.log(typeof p1);


function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(); // Esse parenteses é opcional, poderia ser -> new Data;
const d2 = new Data(24, 12, 2022);
const d3 = new Data(31, 12, 2021);

console.log(typeof d1); // object

console.log(d1);    // Data { dia: 1, mes: 1, ano: 2021, exibir: [Function (anonymous)] }
console.log(d2);    // Data { dia: 24, mes: 12, ano: 2022, exibir: [Function (anonymous)] }
console.log(d3);    // Data { dia: 31, mes: 12, ano: 2021, exibir: [Function (anonymous)] }

console.log(d1.exibir());    // 1/1/2021
console.log(d3.exibir());    // 31/12/2021
console.log(d2.exibir());    // 24/12/2022


/*
    Analogia aula 157: Teoria sobre Objeto

    Função Construtora(classe)  x   Objeto

    Imagine que você tem uma massa de trigo esticada 
    sobre a mesa e decide aplicar um molde no formato 
    de triângulo nela, o produto disso será um pedaço 
    da massa exatamente igual ao molde.

    Pois bem entendendo o exemplo acima podemos compreender
    a função construtora como sendo o molde e o objeto é o
    pedaço da massa com o formato do molde

          Molde                       Massa no formato do molde
    Função construtora ---> new ---------->     Objeto
    
*/

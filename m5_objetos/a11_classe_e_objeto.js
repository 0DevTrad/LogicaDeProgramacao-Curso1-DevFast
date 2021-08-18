class Data {
    //dia = 1
    //mes = 1       //Tendo construído o construtor abaixo, esses dados são desnecessários.
    //ano = 1970

    constructor(d = 1, m = 1, a = 2021) { // Esses valores são os padrões caso não sejam passado nenhum dado.
        this.dia = d        // Para não confundir com o dia lá do Objeto Data.
        this.mes = m        
        this.ano = a        
    }

    exibir() { //Método
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


const d1 = new Data();      // Objeto criado
d1.dia = 24;
d1.mes = 12;
d1.ano = 2022;
console.log(d1);        // Data { dia: 24, mes: 12, ano: 2022 }

const d2 = new Data(31, 12, 2021);  // Objeto criado
console.log(d2.exibir());           // 31/12/2021

/*
    Escrevendo direto esse código, não irá imprimir: 
    
    const d2 = new Data(31, 12, 2021);

    não irá imprimir esses valores, vai imprimir os dados
    originais dentro da class, para que isso seja possível
    é ncessário usar a função constructor dentro da classe.
*/

console.log(typeof d1);    // object
console.log(typeof Data); // function
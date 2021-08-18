/*
    Em JavaScript é possível criar uma função dentro de outra.
*/

function retornaUmaFuncao() {

        function bomDia() {
            return 'Bom dia!!!';
        }

        return bomDia; 
}

/*
    Para que eu conseguisse imprimir "Bom dia!!!" no console ao chamar: 
   
    console.log(retornarUmaFuncao()); 
    
    Dentro da função retornar eu deveria ter chamado: 
    
    return bomDia(); 
    
    e não 
    
    return bomDia;
*/

console.log(retornaUmaFuncao);      //[Function: retornarUmaFuncao]
console.log(retornaUmaFuncao());    //[Function: bomDia]
console.log(retornaUmaFuncao()());  //Bom dia!!!


const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao()); //Bom dia!!!

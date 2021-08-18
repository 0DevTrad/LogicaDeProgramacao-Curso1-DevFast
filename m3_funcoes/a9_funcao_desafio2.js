/* 
    Função vai receber a nota do aluno e retornar o conceito.

    10 -> A+  
    9  -> A   
    8  -> B+  
    7  -> B   
    6  -> C+  
    5  -> C   
    4  -> D+  
    3  -> D   
    2  -> E+  
    1  -> E   
    0  -> F   
*/

//Versão switch
function notaConceito1(nota) {
    switch(Math.ceil(nota)) {       //Math.ceil() arredonda a nota para cima.
        case 10: return 'A+';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return 'Nota Inválida';
    }
    
}

console.log(notaConceito1(10));
console.log(notaConceito1(9));
console.log(notaConceito1(8));
console.log(notaConceito1(7));
console.log(notaConceito1(6));
console.log(notaConceito1(5));
console.log(notaConceito1(4));
console.log(notaConceito1(3));
console.log(notaConceito1(2));
console.log(notaConceito1(1));
console.log(notaConceito1(0));
console.log(notaConceito1(15));

console.log('\n\n');

//Verão if/else
function notaConceito2(nota) {
    if(nota === 10) {
        return 'A+';
    } else if(nota === 9) {
        return 'A';
    } else if(nota === 8) {
        return 'B+';
    } else if(nota === 7) {
        return 'B';
    } else if(nota === 6) {
        return 'C+';
    } else if(nota === 5) {
        return 'C';
    } else if(nota === 4) {
        return 'D+';
    } else if(nota === 3) {
        return 'D';
    } else if(nota === 2) {
        return 'E+';
    } else if(nota === 1) {
        return 'E';
    } else if(nota === 0) {
        return 'F';
    } else {
        return 'Nota Inválida';
    }  
}

console.log(notaConceito2(10));
console.log(notaConceito2(9));
console.log(notaConceito2(8));
console.log(notaConceito2(7));
console.log(notaConceito2(6));
console.log(notaConceito2(5));
console.log(notaConceito2(4));
console.log(notaConceito2(3));
console.log(notaConceito2(2));
console.log(notaConceito2(1));
console.log(notaConceito2(0));
console.log(notaConceito2(15));
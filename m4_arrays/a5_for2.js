const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// foreach --> percorra cada um dos elementos até chegar ao final do array.

// for of --> Irá percorrer cada nota.
for (let nota of notas) { 
    console.log(nota);
}


let valores = '';

for(let nota of notas) {
    valores += nota + ' ';
}
console.log(valores)

// for of --> Acessa os valores
// for in --> Acessa os índices 

let indices = '';

for (let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);
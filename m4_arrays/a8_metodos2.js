const numeros = [1, 2, 3, 4, 5, 8];


numeros.splice(1, 2) //O primeiro parâmetro é o índice e o segundo é quantos posições quer excluir
console.log(numeros); //[1, 4, 5, 8]

numeros.pop(); //Remove o último elemento
console.log(numeros); // [1, 4, 5]

console.log(numeros.pop()); // 5  //Dessa forma ele exclui o índice e mostra qual foi exluído.
console.log(numeros); // [1, 4]


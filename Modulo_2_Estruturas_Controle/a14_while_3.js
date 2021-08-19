const futuro = Date.now() + 1000; //Vai demorar 1 segundo pra executar o código.
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}

console.log('Qtde ' + quantidade);
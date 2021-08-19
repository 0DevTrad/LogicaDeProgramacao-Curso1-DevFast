/*
    produto -> Objeto
    nome, preco e deconto -> chave / atributo / propriedade
*/

const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);
    }
};

/*
    O .this é a forma que se tem dentro do objeto de
    referenciar os seus próprios atributos.
    
    Como é possível ver no exemplo acima.

    É como se escrevesse em português:
    meu.preco ou meu.desconto
*/

console.log(produto.nome) // Forma de acessar
console.log(produto.precoComDesconto());

/*
    Fora do objeto usamos o nome da variável que
    foi definida:

    produto.nome ou produto.precoComDesconto()
*/
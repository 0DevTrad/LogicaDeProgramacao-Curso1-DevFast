const usuario = {
    email: 'aluno@cod3r.com.br'
};

console.log(usuario.email); // 'aluno@cod3r.com.br'
console.log(usuario.nome);  // undefined

usuario.nome = 'Aluno';

console.log(usuario.nome); // Aluno

/*
  Como não havia anteriormente a chave aluno criada,
  foi retornado undefined, mas o JavaScript permite que
  adicionemos posteriormente atributos no objeto.
  
  Consiguimos criar dentro dos objetos os atributos de 
  forma dinâmica.
*/

//Mostrando o objeto inteiro
console.log(usuario);


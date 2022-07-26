let nome;
let idade;
console.log(typeof nome, typeof idade,)
//o resultado da impressão deu undefined porque não foi definido um valor para as variáveis

nome = prompt('Qual é o seu nome?');
idade = prompt('Qual a sua idade?');
console.log (typeof nome, typeof idade);
//tipo da variável idade foi definido como string mesmo depois de eu inserir um número

console.log('Olá', nome + ',', 'você tem', idade, 'anos.')

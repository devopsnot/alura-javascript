const idade = 2;
const nome = "Lara";
const sobrenome = "Ayumi";
const bacharel = false;
const dezAnosDepois = "12";


// Ao executar o código const nomeCompleto = nome + sobrenome, nenhum erro seria exibido e o valor armazenado na variável seria "LaraAyumi" .

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto); Correto

// Ao executar o código const resultado = idade + dezAnosDepois, um erro NaN seria exibido, já que o valor armazenado na variável dezAnosDepois é uma string e não um número.

const resultado = idade + dezAnosDepois;
console.log(resultado); // Resultado = 212


//Ao executar o código console.log(bacharel == 1), um erro NaN seria exibido, já que o valor armazenado na variável bacharel é um booleano e não um número.
console.log(bacharel == 1); // Resultado = false


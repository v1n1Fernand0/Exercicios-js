console.log(7/0) //quando uma operação matemática retorna um resultado infinito, o javascript retorna Infinity
console.log("10"/2) // operações matemáticas com string e permitida desde que haja somente números na string
console.log("Show!"*2) // NAN not a number por conta da string que não é um número
console.log(0.1 + 0.7) // o valor esperado deveria ser 0,8. Devida a uma política de precisão o valor diverge 
//console.log(10.toString()) // Não é possivel converter diretamente um número para string
console.log((10).toString()) // forma correta de conerter um númerico para string
console.log("10"+2) // Nesse caso o valor sera 102, por conta do operador "+" também ser um operador de concatenação e a string ter preferência nessa operação
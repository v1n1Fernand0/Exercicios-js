const valores = [7.7, 8.8, 9.2] // array pré-fixado
console.log(valores[0], valores[2]) //valores por posição
console.log(valores[4]) //Undefined o valor não foi setado
valores[4] = 10 
console.log(valores[4])
console.log(valores.length) // tamanho do array
valores.push({id:3}, false, null, 'teste') // arrays são heterogenios
console.log(valores)
console.log(valores.pop()) // remove último elemento do array
delete valores[0]
console.log(typeof valores) // tipo object
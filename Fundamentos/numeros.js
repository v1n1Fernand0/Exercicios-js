//O javascript considera valores numéricos sem distinção
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2) // Imprimindo os valores atribuídos
console.log(Number.isInteger(peso1))// Função que informa se o valor passado é numérico

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 // operações matemáticas
const media =total /(peso1 + peso2)

console.log(media.toFixed(2)) // definindo casas decimais
console.log(media.toString(2)) //Conversão em binário
console.log(typeof media) // tipo da variavel média
console.log(typeof Number) // Tipo função
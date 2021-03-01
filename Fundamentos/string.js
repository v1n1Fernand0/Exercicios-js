const escola = "estudos"
console.log(escola.charAt(4))//Letra na posição passada entre parênteses
console.log(escola.charAt(10)) //Quando a posição não é encontrada o valor retornado é vazio
console.log(escola.charCodeAt(3))// valor asc do caracter na posição passada
console.log(escola.indexOf(3))// index do caracter na posição passada
console.log(escola.substring(1)) //retorna os caracteres de uma sttring a partir da posição mencionada
console.log(escola.substring(0,3))// retorna um intervalo de caracteres de acordo com a posição e a quantidade de caracteres desejada
console.log('Escola '.concat(escola).concat("!")) // .concat uma das formas de concatenar a string
console.log(escola.replace(3,'y')) // substitu um determinado caracter por outro passado por parâmetro
console.log('Ana, Maria, Pedro'.split(',')) // divide a string por um separador predefinido na mesma

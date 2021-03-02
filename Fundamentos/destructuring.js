// novo recurso do es2015

const pessoa = {
    nome:'Ana',
    idade:5,
    endereco : {
        logradouro: 'Rua A',
        numero: 12
    }
}

const{nome, idade} = pessoa 
console.log(nome, idade)

const{nome:n, idade:i} = pessoa
console.log(n,i)




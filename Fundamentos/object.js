const prod1 = {
}

prod1.nome = 'Xiaomi red me 9'
prod1.preco = 1800.95
prod1['Desconto legal'] = 0.40 // não é uma boa prática mas é possível

console.log(prod1)

const prod2 = {
    nome:'Camisa',
    preco:79.80,
    obj:{
        teste:1
    }
}

console.log(prod2)
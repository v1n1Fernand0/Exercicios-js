console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'teste'
obj['teste'] = 'Bola2'
console.log(obj)

function Obj(nome){
    this.nome = nome
}

const Obj = new Obj('vinicius')
const Obj2 = new Obj('Marcos')
console.log(Obj.nome)
console.log(Obj2.nome)
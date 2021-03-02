
function tratarErro(erro){
    throw new Error('...')}

function imprimirNomeGritado(obj){
try{
    console.log(obj.name.toUpperCase()+'!!!')
} catch(e){
    tratarErro(e)
}

}

const obj = {nome: 'Carlos'}
console.log(imprimirNomeGritado(obj))
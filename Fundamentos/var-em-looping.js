
// como i foi declarado por var, e var não tem restrição de escopo, logo i será visivel abaixo exibindo o último valor do laço for
for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =',i)
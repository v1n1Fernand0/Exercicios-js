
// como i foi declarado por let, ela recebe uma restrição de escopo. A tentativa de exibir i fora do escopo ocasionará um erro
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =',i)
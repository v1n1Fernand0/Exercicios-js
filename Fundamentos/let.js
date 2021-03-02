var numero = 1 // escopo global e escope de função
{
    let numero = 2 // escopo global, escopo de função e escopo de bloco
    console.log('dentro ',numero)
}
console.log('fora ',numero)
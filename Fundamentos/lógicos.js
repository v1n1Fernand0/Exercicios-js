function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(true, true)
console.log(true, false)
console.log(false, true)
console.log(false, false)
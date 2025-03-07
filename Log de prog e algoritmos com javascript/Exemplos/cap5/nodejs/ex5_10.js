const prompt = require("prompt-sync") ()
const valor = Number(prompt("Valor R$: "))
const num = Number(prompt("Número de Parcelas: "))
const valorParcelas = Math.floor(valor / num)
 
for (let i = 1; i < num; i++) {
    console.log(`${i} Parcela: R$${valorParcelas.toFixed(2)}`)
}
console.log(`${num} Parcela: R$${valorParcelas + (valor % num).toFixed(2)}`)
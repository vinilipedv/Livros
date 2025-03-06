const prompt = require("prompt-sync")()
const compra = prompt("Valor da compra R$: ")

const aux = Math.floor(compra / 20)
let parcelas
if (aux == 0) {
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}
const valorParcela = compra / parcelas
console.log (`Pode pagar em ${parcelas}x de: R$${valorParcela}`)
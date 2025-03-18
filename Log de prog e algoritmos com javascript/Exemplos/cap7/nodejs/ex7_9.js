const prompt = require("prompt-sync")()
const formula = prompt("Fórmula: ")
let abre = 0
let fecha = 0
for (const simbolo of formula) {
    if (simbolo == "(") {
        abre++
    } else if (simbolo == ")") {
        fecha++
    }
    if (fecha > abre) {
        break
    }
}
if (abre == fecha) {
    console.log("Ok! Fórmula correta em relacão aos parenteses")
} else {
    console.log("Erro... Fórmula incorreta")
}
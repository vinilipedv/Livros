const prompt = require("prompt-sync")()
console.log("Digite o valor do saque ou 0 para sair")
const saques = []
do {
    const valor = prompt("Valor R$: ")
    if (valor == 0) {
        break
    }
    if (valor % 10 != 0) {
        console.log("Digite um valor válido, multiplo de 10")
    } else {
        console.log("Saque realizado com sucesso!")
    }
    saques.push(valor)
} while (true)
console.log("\nSaques Válidos")
console.log("-".repeat(40))
const saquesValidos = saques.filter(saque => saque % 10 == 0)
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2))
}
console.log("-".repeat(40))
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
console.log(`Total de saques R$: ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\nNúmero de tentativas de saques inválidos: ${saquesInvalidos}`)
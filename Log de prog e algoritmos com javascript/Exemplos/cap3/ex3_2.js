const prompt = require("prompt-sync")()
const veiculo = prompt("Veiculo: ")
const preco = Number(prompt("Preco R$: "))
const entrada = preco * 0.5
const parcela = entrada / 12
console.log(`Promocão: ${veiculo}`)
console.log(`Valor de entrada é R$${entrada.toFixed(2)}`)
console.log(`Valor das em parcelas em 12 vezes é R$${parcela.toFixed(2)}`)
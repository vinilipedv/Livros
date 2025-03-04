const prompt = require("prompt-sync")()
const racao = Number(prompt("Peso da racão (Kg): "))
const consumo = Number(prompt("Consumo de racão por dia (g): "))
const duracao = Math.floor((racao * 1000) / consumo)
const resto = (racao * 1000) % consumo
console.log(`Duracão da racao (dias): ${duracao}`)
console.log(`Sobra da racão (g): ${resto}`)
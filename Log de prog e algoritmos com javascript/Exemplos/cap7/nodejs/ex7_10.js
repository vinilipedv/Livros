const prompt = require("prompt-sync")()
const altura = Number(prompt("Alutra da árvore: "))
console.log()
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - 1)
    console.log(" ".repeat(espacos) + "*".repeat(i * 2))
}
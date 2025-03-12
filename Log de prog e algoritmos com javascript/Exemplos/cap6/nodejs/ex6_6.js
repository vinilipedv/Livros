const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada ou digite fim para sair")
const clientes = []
do {
    const nome = prompt("Digite o nome do Cliente: ")
    if (nome == "fim") {
        break
    }
    const idade = Number(prompt("Digita a idade do Cliente"))
    clientes.push({ nome, idade })
    console.log("OK! Cliente cadastrado(a)")
} while (true)
console.log("-".repeat(40))
console.log("Fila Preferencial\n")
const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})
console.log("-".repeat(40))
console.log("Fila Normal\n")
const filaNorm = clientes.filter(cliente => cliente.idade < 60)
filaNorm.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})
const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite fim para sair")
const alunos = []
do {
    const nome = prompt("Nome: ")
    if (nome = "fim") {
        break
    }
    const nota = Number(prompt("Nota: "))
    alunos.push({ nome, nota })
    console.log("OK! Aluno(a) cadastrado(a)")
} while (true)
console.log("_".repeat(40))
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior nota: ${maior}`)
if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior)
    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma")
}
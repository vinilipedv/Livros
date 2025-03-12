const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nomes = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({ nomes, acertos })
    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
    frm.inCandidato.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }
    let lista = ""
    for (candidato of candidatos) {
        const { nomes, acertos } = candidato
        lista += nomes + " - " + acertos + " Acertos\n"
    }
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () => {
    if (cortados == 0) {
        resp.innerText = "Nào há candidatos aprovados"
    }
    const corte = Number(prompt("Número de acertos para aprovacão?"))
    if (corte == 0 || isNaN(corte)) {
        alert("Digite um número válido")
        return
    }
    const cortados = candidatos.filter(aux => aux.acertos >= corte)
    cortados.sort((a, b) => a.acertos - b.acertos)
    cortados.reverse()
    let lista = ""
    for (cortado of cortados) {
        const { nomes, acertos } = cortado
        lista += nomes + " - " + acertos + " Acertos\n"
    }
    resp.innerText = lista

})
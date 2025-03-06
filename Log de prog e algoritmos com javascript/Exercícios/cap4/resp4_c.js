const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if (valor < 1.00) {
        alert("Valor insuficiente!(mínimo R$1.00)")
        frm.inValor.focus()
        return
    }
    let troco
    let tempo

    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else if (valor >= 1.00) {
        tempo = 30
        troco = valor - 1.00
    }
    resp1.innerText = `Tempo: ${tempo} min`
    if (troco > 0) {
        resp2.innerText = `Troco: R$${troco}`
    }
})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

    if (condutor <= permitida) {
        resp.innerText = `Sem Multa`
        resp.style.color = "blue"
    } else {
        const maisVinte = permitida * 1.2
        if (condutor <= maisVinte) {
        resp.innerText = `Multa Leve`
        resp.style.color = "green"
        } else {
            resp.innerText = `Multa Grave`
            resp.style.color = "red"
        }
    }
})
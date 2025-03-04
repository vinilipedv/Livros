const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const peso = Number(frm.inPeso.value)

    const preco = (quilo/1000) * peso
    resp.innerText = `Valor total a pagar: R$${preco.toFixed(2)}`

    e.preventDefault()
})
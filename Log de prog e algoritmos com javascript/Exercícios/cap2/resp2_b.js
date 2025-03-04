const frm = document.querySelector("form")
const valor = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valorPor15 = Number(frm.inValorPor15.value)
    const tempo = Number(frm.inTempo.value)

    const total = Math.ceil(valorPor15 * (tempo/15))

    valor.innerText = `Valor a pagar: R$${total.toFixed(2)}`
    e.preventDefault()
})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)){
        resp.innerText = `A raiz quadrada de ${numero} é ${raiz}`
    } else {
        resp.innerText = `Não tem raiz exata para ${numero}`
    }
})

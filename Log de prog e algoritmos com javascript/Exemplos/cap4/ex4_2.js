const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const altura = frm.inAltura.value
    const masculino = frm.inMasculino.checked

    let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)}`
})
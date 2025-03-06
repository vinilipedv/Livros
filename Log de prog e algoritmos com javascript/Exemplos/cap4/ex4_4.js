const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const horaBR = Number(frm.inHora.value)
    let horaFR = horaBR + 5
    if (horaFR > 24) {
        horaFR = horaFR - 24
    }
    resp.innerText = `Hora na Franca ${horaFR.toFixed(2)}`
})
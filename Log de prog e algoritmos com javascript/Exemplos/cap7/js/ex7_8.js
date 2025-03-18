const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const venc = new Date()

    const partes = dataVenc.split("-")
    venc.setDate(Number(partes[2]))
    venc.setMonth(Number(partes[1]) - 1)
    venc.setFullYear(Number(partes[0]))

    const atraso = hoje - venc
    let multa = 0
    let juros = 0

    if (atraso > 0) {
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS
    }
    const total = valor + juros + multa

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})
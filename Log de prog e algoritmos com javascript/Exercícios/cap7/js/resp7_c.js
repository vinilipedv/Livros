const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const infracao = frm.inData.value
    const valor = Number(frm.inValor.value)
    const vencto = new Date()

    const partes = infracao.split("-")
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    const dia = vencto.getDate()
    vencto.setDate(dia + 90)
    const mes = vencto.getMonth() + 1
    const ano = vencto.getFullYear()

    const desconto = valor * 0.80

    resp1.innerText = `Data limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`
    resp2.innerText = `Valor com Desconto R$: ${desconto.toFixed(2)}`

})
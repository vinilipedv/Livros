const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    const veiculo = frm.inVeiculo.value
    const preco = frm.inPreco.value

    const entrada = preco * 0.5
    const parcelado = entrada / 12

    resp1.innerText = `Promocão para o ${veiculo}`
    resp2.innerText = `Valor de entrada: R$${entrada.toFixed(2)}`
    resp3.innerText = `Valor em 12x: R$${parcelado.toFixed(2)}`

    e.preventDefault()
})
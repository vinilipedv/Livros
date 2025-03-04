const frm = document.querySelector("form")
const produto = document.querySelector("#outProduto")
const promocao = document.querySelector("#outPromocao")

frm.addEventListener("submit",(e) =>{
    const nomeProduto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco / 2 
    const custoPromocao = (2 * preco) + desconto
    
    produto.innerText = `${nomeProduto} - Promocão, leve 3 por: R$${custoPromocao.toFixed(2)}`
    promocao.innerText = `O terceiro produto custa apenas: R$${desconto.toFixed(2)}`
    e.preventDefault()
})
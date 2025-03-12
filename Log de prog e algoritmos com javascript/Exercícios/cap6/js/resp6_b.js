const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if (numeros.includes(num)) {
        alert(`Voce ja digitou o número ${num}. Digite outro...`)
        frm.reset()
        frm.inNumero.focus()
        return
    }
    numeros.push(num)
    resp1.innerText = "Números: " + numeros, join(", ")
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
    if (numeros.length == 0) {
        alert("Não há números na lista...")
        inNum.focus()
        return
    }
    let ordem = true
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            ordem = false
            break
        }
    }
    resp2.innerText = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"
})

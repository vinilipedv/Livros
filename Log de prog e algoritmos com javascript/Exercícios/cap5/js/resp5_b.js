const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const chinchilas = Number(frm.inNumero.value)
    const anos = Number(frm.inAno.value)
    let repeticao = ""
    let total = chinchilas

    for (let i = 1; i <= anos; i++) {
        if (chinchilas < 2) {
            alert("O número de chinchilas deve ser pelo menos 2 (um casal)")
            break
        } else {
            repeticao = repeticao + i + " Ano: " + total + " Chinchilas\n"
            total = total * 3
        }
    }
    resp.innerText = repeticao
})
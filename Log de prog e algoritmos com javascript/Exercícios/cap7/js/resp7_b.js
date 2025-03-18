const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const frase = (frm.inFrase.value).trim()

    if (frase.indexOf(" ") == -1) {
        alert("Informe, por favor, uma frase")
        frm.inFrase.focus()
        return
    }
    const frase2 = frase.replace(/ /g, "")
    const tam = frase2.length

    let iguais = true
    for (let i = 0; i < tam / 2; i++) {
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false
            break
        }
    }
    if (iguais) {
        resp.innerText = `${frase} é um Palíndromo`
    } else {
        resp.innerText = `${frase} Não é um Palíndromo`
    }
})
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const simbolos = Number(frm.inSimbolos.value)
    let estrelas = ""

    for (let i = 1; i <= simbolos; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "-"
        }
    }
    resp.innerText = estrelas
})
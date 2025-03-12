const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const nomes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clubes = frm.inClube.value
    nomes.push(clubes)
    frm.inClube.value = ""
    inClube.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (nomes.length == 0) {
        alert("Não há Clubes para Listar")
        inClube.focus()
        return
    }
    let Lista = ""
    nomes.forEach((nome, i) => (Lista += `${nome}\n`))
    resp.innerText = Lista
})

frm.btMontar.addEventListener("click", () => {
    const tam = nomes.length
    if (tam == 0 || tam % 2 == 1) {
        alert("O número de Clubes deve ser Par")
        inClube.focus()
        return
    }
    let jogos = ""
    const ultimo = tam - 1
    for (i = 0; i < tam / 2; i++) {
        jogos += nomes[i] + " x " + nomes[ultimo - i] + "\n"
      }
    resp.innerText = jogos
})
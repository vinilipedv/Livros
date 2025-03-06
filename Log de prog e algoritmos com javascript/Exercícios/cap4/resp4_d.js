const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp1.innerText = "Lados não podem formar um triangulo"
    } else {
        resp1.innerText = "Lados podem formar um triangulo"
    } if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        resp2.innerText = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resp2.innerText = "Tipo: Isóceles"
    } else if (ladoA != ladoB != ladoC) {
        resp2.innerText = "Tipo: Escaleno"
    }

})
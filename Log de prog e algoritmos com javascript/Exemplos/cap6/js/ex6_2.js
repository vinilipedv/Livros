const frm = document.querySelector("form")
const respErro = document.querySelector("#outErro")
const respChanche = document.querySelector("#outChance")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        respDica.innerText = `Parabéns voce acertou! O número sorteado era ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) {
            alert(`Voce já apostou o número ${numero}. Tente Outro...`)
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros
            respErro.innerText = `${numErros} (${erros.join(", ")})`
            respChanche.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Gamer Over! Número Sorteado: ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: o número sorteado é ${dica}`
            }
        }
    }
    frm.btNovo.addEventListener("click", () => {
        location.reload()
    })
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
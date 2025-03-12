const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
})

frm.btUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido de Urgencia")
        frm.inNome.focus()
        return
    }
    const nome = frm.inNome.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
})

frm.btAtender.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inNome.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
})
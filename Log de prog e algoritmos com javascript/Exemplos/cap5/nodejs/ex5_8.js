const prompt = require("prompt-sync") ()
console.log ("Programa anos de Copa do Mundo. Digite 0 para sair")
console.log ("----------------------------------------------------")

do {
    const ano =  Number(prompt("Ano: "))
    if (ano == 0) {
        break
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve copa em ${ano}, por causa da Segunda guerra Mundial`)        
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`${ano} é um ano de Copa do Mundo`)
    } else {
        console.log(`${ano} Não é um ano de Copa do Mundo`)
    }    
} while(true)
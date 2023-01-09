function verificaChuteValido(chute) {
    // ou numero = parseInt(chute)
    const numero = parseInt(chute)

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}



alert("Bem vindo a aula de Java Script com uso de Do e While")

do {
    let num1 = Number(prompt("Insira o primeiro número"))
    let num2 = Number(prompt("Insira o segundo número"))
    let soma, mult
    let escolha = Number(prompt("Digite 1 para soma ou 2 para multiplicação"))

    switch (escolha) {
        case 1: {
            soma = num1 + num2
            alert(`Você escolheu soma. A soma dos números é ${soma} `)
        }
            break

        case 2: {
            soma = num1 + num2
            alert(`Você escolheu multiplicação. A soma dos números é ${mult} `)
        }
            break

        default: alert("Error! Opção Inválida")
    }

    let final = Number(prompt("Aperte 1 para continuar ou 2 para encerrar"))

    
} while(final)
/* 

Tipos de variáveis

let (É uma variável que pode mudar de valor)
const (significa constante, e não pode mudar de valor)
Exemplos
*/

const cpf = "41706215858"
//console.log(cpf)
//cpf = "14584126540"
//console.log(cpf)

/*
Variáveis criadas fora de {} (Bloco de instruções) são chamadas
de variáveis de escopo global, ou seja, você pode usar a
variável em qualquer parte do código

Variáveis criadas dentro {} (Dentro do bloco). após a saída do bloco,
a variável é deletada

*/

// tipos de variáveis. Obs: Em Java Script não precisa declarar o tipo ou tipagem

let num1 = 10 // Variáveis do tipo numérica de "Numb"
let num2 = 10.5 // Variável tipo double
let nome = "Gilmar" // String
let verdade = true // Tipo boolean
let resposta // undefined
let saldo = null // Variável foi definida com valor nolo

//Como saber o tipo de variável

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)

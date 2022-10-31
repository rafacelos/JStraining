alert("Bem vindo ao programa de calcular números. Por favor coloque 2 números.")
let x = prompt("Digite o primeiro número : ")
let y = prompt("Digite o segundo : ")

let sum = Number(x.replace(",",".")) + Number(y.replace(",","."))
alert(`A soma dos dois números é igual à ${sum.toFixed(1)}.`)

let subtraction= Number(x.replace(",",".")) - Number(y.replace(",","."))
alert(`A subtração dos dois números é igual à ${subtraction.toFixed(1)}.`)

let multiply = Number(x.replace(",",".")) * Number(y.replace(",","."))
alert(`A multiplicação dos dois números é igual à ${multiply.toFixed(1)}.`)

let division = Number(x.replace(",",".")) / Number(y.replace(",","."))
alert(`A divisão dos dois números é igual à ${division.toFixed(1)}.`)

let restOfDiv = Number(x.replace(",",".")) % Number(y.replace(",","."))
alert(`O resto da divisão desses dois números é de ${restOfDiv.toFixed(1)}.`)

const evenOrOdd = (sum % 2) == 0 ? "par" : "ímpar"
alert(`A soma dos dois números é ${evenOrOdd}.`)

const compare = x == y ? "iguais" : "diferentes"
alert(`Os dois números são ${compare}.`)
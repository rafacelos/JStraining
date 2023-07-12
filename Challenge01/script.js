alert("Bem vindo ao programa de calcular números. Por favor coloque 2 números.")
let x = prompt("Digite o primeiro número : ")
let y = prompt("Digite o segundo : ")

let sum = Number(x.replace(",",".")) + Number(y.replace(",","."))
let subtraction= Number(x.replace(",",".")) - Number(y.replace(",","."))
let multiply = Number(x.replace(",",".")) * Number(y.replace(",","."))
let division = Number(x.replace(",",".")) / Number(y.replace(",","."))
let restOfDiv = Number(x.replace(",",".")) % Number(y.replace(",","."))
const evenOrOdd = (sum % 2) == 0 ? "par" : "ímpar"
const compare = x == y ? "iguais" : "diferentes"

alert (`A soma dos dois números é igual à ${sum.toFixed(1)}.
A subtração dos dois números é igual à ${subtraction.toFixed(1)}.
A multiplicação dos dois números é igual à ${multiply.toFixed(1)}.
A divisão dos dois números é igual à ${division.toFixed(1)}.
O resto da divisão desses dois números é de ${restOfDiv.toFixed(1)}.
Extras:
A soma dos dois números é ${evenOrOdd}.
Os dois números são ${compare}.`)
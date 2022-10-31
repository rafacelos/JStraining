// let nome = prompt("Qual o seu nome?");

// alert("Olá, " + nome);


// alert("Vamos somar 2 números");
// let numberOne = prompt("Digite o primeiro número: ");
// let numberTwo = prompt("Digite o segundo número: ");

// let result = Number(numberOne) + Number(numberTwo);

// alert("O resultado é: " + result);

// alert("Vamos dividir por 2, o resultado final será: " + result/2)

/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

alert("Seja bem vindo ao programa de operaçoes matemáticas!")

let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtraçao: ' + sub)
alert('Multiplicaçao: ' + multi)
alert('Divisao: ' + div)
alert('Resto da divisao: ' + restDiv)

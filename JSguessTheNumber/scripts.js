/*
** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let userGuess = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

let randomNumber = Math.ceil(Math.random() * 10)
let match = Number(userGuess) == randomNumber
let xAttempts = 1;

console.log(userGuess, randomNumber, match)

while(Number(userGuess) != randomNumber) {
  userGuess = prompt("Que pena, voce errou. Quer tentar novamente?")
  xAttempts++
}

alert(`Parabéns, o número era ${randomNumber} voce adivinhou o número em ${xAttempts} tentativas.`)
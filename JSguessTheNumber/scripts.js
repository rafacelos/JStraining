let randomNumber = Math.ceil(Math.random() * 10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnGuess = document.querySelector("#btnGuess")
const btnReset = document.querySelector("#btnReset")

btnGuess.addEventListener("click", handleGuessClick)
btnReset.addEventListener("click", () => {  
  randomNumber = Math.ceil(Math.random() * 10)
  xAttempts = 1
  
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
});

function handleGuessClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#userGuess")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  
  inputNumber.value = " "
  xAttempts++
};
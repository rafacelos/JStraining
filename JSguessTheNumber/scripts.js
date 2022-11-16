const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnGuess = document.querySelector("#btnGuess");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.ceil(Math.random() * 10);
let xAttempts = 1;

btnGuess.addEventListener("click", handleGuessClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", (e) => {
  if(e.key== 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
});

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
};

function handleGuessClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#userGuess")
  let guess = Number(inputNumber.value)

  if (guess < 0 || guess > 10) {
    alert("número inválido, por favor digite um número entre 0 e 10")
    return
  }
  
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    toggleScreen()
  }
  xAttempts++
  inputNumber.value = " "
};

function handleResetClick() {
  randomNumber = Math.ceil(Math.random() * 10)
  xAttempts = 1
  
  toggleScreen()
};
alert('Olá prezado aluno! Vamos calcular a sua média?')
let studentName = prompt('Antes de começar, pode me informar o seu nome?')
let x = prompt(`Que bom te ver por aqui ${studentName}! Quantos bimestres de aula devem ser calculados? Por favor, apenas o número :D`)
let total
let firstBimester
let secondBimester
let thirdBimester
let fourthBimester

if (x == 1) {
  firstBimester = prompt('Por favor adicione a sua nota do primeiro bimestre:');
  total = Number(firstBimester.replace(",","."));
} else if (x == 2) {
  firstBimester = prompt('Por favor adicione a sua nota do primeiro bimestre:');
  secondBimester = prompt('Por favor adicione a sua nota do segundo bimestre:');
  total = (Number(firstBimester.replace(",",".")) + Number(secondBimester.replace(",","."))) / 2;
} else if (x == 3) {
  firstBimester = prompt('Por favor adicione a sua nota do primeiro bimestre:');
  secondBimester = prompt('Por favor adicione a sua nota do segundo bimestre:');
  thirdBimester = prompt('Por favor adicione a sua nota do terceiro bimestre:');
  total = (Number(firstBimester.replace(",",".")) + Number(secondBimester.replace(",",".")) + Number(thirdBimester.replace(",","."))) / 3;
} else if (x == 4) {
  firstBimester = prompt('Por favor adicione a sua nota do primeiro bimestre:');
  secondBimester = prompt('Por favor adicione a sua nota do segundo bimestre:');
  thirdBimester = prompt('Por favor adicione a sua nota do terceiro bimestre:');
  fourthBimester = prompt('Por favor adicione a sua nota do quarto bimestre:');
  total = (Number(firstBimester.replace(",",".")) + Number(secondBimester.replace(",",".")) + Number(thirdBimester.replace(",",".")) + Number(fourthBimester.replace(",","."))) / 4;
} else {
  alert('Número de Bimestres inválido. Por favor indique um número entre 1-4');
}
total = total.toFixed(2)

if (total >= 9) {
  alert(`Parabéns ${studentName}!! Voce mandou MUITO bem e está com uma média de ${total}!`)
} else if (total >= 6) {
  alert(`Muito bom ${studentName}. Voce teve um bom desempenho e está com uma média de ${total}!`)
} else {
  alert(`Poxa ${studentName}, lamento muito mas a sua média ficou em ${total}. Entretanto, ainda vai ter uma ótima oportunidade para recuperar essa media através da prova de recuperaçao. Pode contar comigo antes da prova para te ajudar em qualquer dúvida! Me envie um email para marcarmos um bate-papo sobre o que voce está com mais dificuldade.`)
}
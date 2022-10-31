let students = [
  {
    sName: "Joao",
    firstTest: 7.8,
    secondTest: 3.5,
  },
  {
    sName: "Maria",
    firstTest: 8.8,
    secondTest: 9.5,
  },
  {
    sName: "Rodrigo",
    firstTest: 8.5,
    secondTest: 6.5,
  },
  {
    sName: "Pedro",
    firstTest: 7.5,
    secondTest: 6.5,
  },
]

let result

function calculateResult(x, y) {
  result = (x + y) / 2
  return result
}

let feedback

function calculateFeedback(z) {
  if (result >= 9) {
    feedback = `\n Parabéns ${z}!! Voce mandou MUITO bem e está aprovado(a)!`
  } else if (result >= 7) {
    feedback = `\n Muito bom ${z}. Voce foi aprovado(a)!`
  } else {
    feedback = `\n Poxa ${z}, nao foi dessa vez.`
  }
}

for (let student of students) {
  calculateResult(student.firstTest, student.secondTest)
  calculateFeedback(student.sName)
  alert(` A média do(a) aluno(a) ${student.sName} é: ${result.toFixed(1)} ${feedback}`)
}
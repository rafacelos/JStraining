/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


const patients = [
  {
    name: "Karime",
    age: 29,
    weight: 59,
    height: 1.63,
  },
  {
    name: "Rafael",
    age: 28,
    weight: 102,
    height: 1.75,
  },
  {
    name: "Ariane",
    age: 38,
    weight: 61,
    height: 1.65,
  },
  {
    name: "André",
    age: 25,
    weight: 85,
    height: 1.72,
  },
];

let imc, imcRank
let imcList = [];

const calculateImc = (weight, height) => {
  imc = weight / (height ** 2)
};

const imcVeredict = (imc) => {
  if (imc < 18.5){
    imcRank = "de magreza"
  }
  else if (imc > 18.4 && imc < 25){
    imcRank = "normal"
  }
  else if (imc > 24.9 && imc < 30){
    imcRank = "de sobrepeso"
  }
  else if (imc > 29.9 && imc < 35){
    imcRank = "de obesidade nível 1"
  }
  else if (imc > 34.9 && imc < 40){
    imcRank = "de obesidade nível 2"
  }
  else {
    imcRank = "de obesidade nível 3"
  }
};

for(let patient of patients) {
  calculateImc(patient.weight, patient.height)
  imcVeredict(imc)
  imcList.push(`\nPaciente ${patient.name} possui o IMC de: ${imc.toFixed(2)}, e está em nível ${imcRank}`)
};

alert(imcList);
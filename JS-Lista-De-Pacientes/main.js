/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

// const patients = [
//   {
//     name: "Luiz",
//     age: 22,
//     weight: 85,
//     height: 1.90,
//   },
//   {
//     name: "Andressa",
//     age: 24,
//     weight: 55,
//     height: 1.59,
//   },
//   {
//     name: "Rafael",
//     age: 28,
//     weight: 88,
//     height: 1.75,
//   },
// ]

// let patientNames = []

// // for(let index = 0; index < patients.length; index++) {
// //   patientNames[index] = " " + (patients[index].name)
// // }
// // Vamos usar uma versao mais moderna com o for of

// for(let patient of patients) {
//   patientNames.push(" " + patient.name)
// }

// alert(patientNames)

// Desafio:
// Criar o código acima mas com uma frase de descriçao do paciente,
// para cada paciente.


const patients = [
  {
    name: "Karime",
    age: 29,
    weight: 59,
    height: 163,
  },
  {
    name: "Rafael",
    age: 28,
    weight: 102,
    height: 175,
  },
  {
    name: "Ariane",
    age: 38,
    weight: 61,
    height: 165,
  },
  {
    name: "André",
    age: 25,
    weight: 85,
    height: 172,
  },
];

let patientList = [];

for(let patient of patients) {
  patientList.push(`\nPaciente ${patient.name}, ${patient.age} anos de idade, com ${patient.height} de altura e peso de ${patient.weight}kg`)
};

alert(patientList);
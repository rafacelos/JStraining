/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



  basicamente:

  Input:
  - 3 opçoes de input do usuário do tipo number.
  - Se ele selecionar o 1, deve depois adicionar um item ("string") a uma lista.

  Variáveis:
  - é preciso de uma variável para a opçao de input (1/2 ou 3)
  - é preciso uma lista (array [])
  - é preciso de uma variável de controle para a lista, de modo a adicionar. Exemplo:
  let index = 0
  if blablabla {
  items[index] = prompt("blablaba")
  index++
  }

  no caso do código abaixo, apenas criamos a variável item e adicionamos no array
  com o .push(item)

  Caminhos ideiais: 
  - 3 caminhos.

  Caminhos alternativos:
  - 1, se ao selecionar o 2 e nao houver itens na lista, devolver a mensagem "nao existem itens .."
  
  Tratamento de dados:
  - Precisamos de 2 tipos de dados: Number para o primeiro input - String para o input da lista.

*/

let option
let items = []

while(option != 3) {
  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `));

    switch(option) {
      case 1:
        let item = (" ") + prompt("Digite o item a ser adicionado na lista:")
        items.push(item)
        break;
      
      case 2:
        if (items.length == 0) {
          alert("Não existem itens cadastrados")
        }
        else {
          alert(items);
        }
        break;

      case 3:
        alert("Aplicaçao finalizada :D")
        break;
      
      default:
        alert("opçao inválida")
    }
}
const resultados = [
  {
    teste: "Teste da marvel",
    //a proxima variavel vai ser pra simular a quantidade de vezes que o teste foi feito
    simulaAplicado: 5,
    // a proxima variavel simula a quantidade de perguntas certas efetuadas pelos usuarios
    simulaRespostaCerta: 9,
  },
  {
    teste: "Teste da DC",
    simulaAplicado: 4,
    simulaRespostaCerta: 6,
  },
  {
    teste: "Teste de League Of Legends",
    simulaAplicado: 2,
    simulaRespostaCerta: 4,
  },
  {
    teste: "Teste de Valorant",
    simulaAplicado: 1,
    simulaRespostaCerta: 0,
  },
];

function exibirResultados(resultados) {
  // Cria a tabela e seu cabeçalho
  const tabela = document.createElement("table");
  const cabecalho = tabela.createTHead().insertRow();
  cabecalho.insertCell().textContent = "Teste";
  cabecalho.insertCell().textContent = "Testes realizados";
  cabecalho.insertCell().textContent = "Respostas corretas";

  // Adiciona os dados do array resultados à tabela
  for (const resultado of resultados) {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = resultado.teste;
    linha.insertCell().textContent = resultado.simulaAplicado;
    linha.insertCell().textContent = resultado.simulaRespostaCerta;
  }

  // Seleciona o elemento HTML onde a tabela será exibida
  const listaResultado = document.getElementById("listaResultado");

  // Adiciona a tabela gerada à listaResultado
  listaResultado.appendChild(tabela);
}

exibirResultados(resultados);

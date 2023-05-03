fetch("http://localhost:3001/resultados")
  .then((response) => response.json())
  .then((data) => exibirResultados(data))
  .catch((error) => console.error(error));

function exibirResultados(resultados) {
  // Cria a tabela e seu cabeçalho
  const tabela = document.createElement("table");
  const cabecalho = tabela.createTHead().insertRow();
  cabecalho.insertCell().textContent = "Teste";
  cabecalho.insertCell().textContent = "Quantidade de perguntas feitas";
  cabecalho.insertCell().textContent = "Quantidade de respostas certas";

  // Adiciona os dados do array resultados à tabela
  for (const resultado of resultados) {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = resultado.teste;
    linha.insertCell().textContent = resultado.qtd_perguntas;
    linha.insertCell().textContent = resultado.qtd_Acertos;
  }

  // Seleciona o elemento HTML onde a tabela será exibida
  const listaResultado = document.getElementById("listaResultado");

  // Adiciona a tabela gerada à listaResultado
  listaResultado.appendChild(tabela);
}

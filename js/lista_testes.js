const listaTeste = document.getElementById("listaTeste");

const criarBotao = (teste, indice) => {
  const botao = document.createElement("button");
  botao.textContent = teste.teste;
  botao.addEventListener("click", () => {
    fetch("http://localhost:3001/testes")
      .then((res) => res.json())
      .then((dados) => {
        const testeSelecionado = dados[indice];
        const url =
          "lista_perguntas.html?teste=" +
          encodeURIComponent(JSON.stringify(testeSelecionado));
        window.location.href = url;
      })
      .catch((err) => console.error(err));
  });
  return botao;
};

fetch("http://localhost:3001/testes")
  .then((res) => res.json())
  .then((dados) => {
    const listaBotao = dados.map(criarBotao);
    listaBotao.forEach((botao) => {
      listaTeste.appendChild(botao);
    });
  })
  .catch((err) => console.error(err));

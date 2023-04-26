const urlParams = new URLSearchParams(window.location.search);
const teste = JSON.parse(decodeURIComponent(urlParams.get("teste")));

const listaPergunta = document.getElementById("listaPergunta");

const numPerguntas = teste.perguntas.length;
let indicePerguntaAtual = 0;
let numAcertos = 0;

const exibirPergunta = (indice) => {
  const perguntaAtual = teste.perguntas[indice];
  const divPergunta = document.createElement("div");

  const tituloPergunta = document.createElement("h3");
  tituloPergunta.textContent = perguntaAtual.pergunta;
  divPergunta.appendChild(tituloPergunta);

  const opcoes = ["A", "B", "C", "D", "E"];
  opcoes.forEach((opcao) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opcoes";
    input.value = `opcao${opcao}`;
    label.appendChild(input);
    label.appendChild(document.createTextNode(perguntaAtual[`opcao${opcao}`]));
    divPergunta.appendChild(label);
    divPergunta.appendChild(document.createElement("br"));
  });

  const botaoProxima = document.createElement("button");
  if (indice < numPerguntas - 1) {
    botaoProxima.textContent = "Próxima pergunta";
  } else {
    botaoProxima.textContent = "Finalizar teste";
  }
  botaoProxima.addEventListener("click", () => {
    const opcaoSelecionada = document.querySelector(
      "input[name='opcoes']:checked"
    ).value;
    if (opcaoSelecionada === perguntaAtual.resposta) {
      numAcertos++;
    }
    if (indice < numPerguntas - 1) {
      indicePerguntaAtual++;
      exibirPergunta(indicePerguntaAtual);
    } else {
      localStorage.setItem("numAcertos", numAcertos);
      window.location.href = "../html/apresenta_resultado.html";
    }
  });
  divPergunta.appendChild(botaoProxima);

  listaPergunta.innerHTML = "";
  listaPergunta.appendChild(divPergunta);
};

exibirPergunta(indicePerguntaAtual);

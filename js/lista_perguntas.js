const urlParams = new URLSearchParams(window.location.search);
const teste = JSON.parse(decodeURIComponent(urlParams.get("teste")));

const listaPergunta = document.getElementById("listaPergunta");

const numPerguntas = teste.perguntas.length;
let indicePerguntaAtual = 0;
let qtdAcertos = 0;
let qtdPerguntas = 0;

// async function cadastraResultados() {
//   const resultados = {
//     teste: teste.teste,
//     qtd_perguntas: qtdPerguntas,
//     qtd_Acertos: qtdAcertos,
//   };

//   const response = await fetch("http://localhost:3001/resultados", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(resultados),
//   });

//   if (!response.ok) {
//     const errorMessage = await response.text();
//     console.error(errorMessage);
//     return;
//   }
// }

async function cadastraResultados() {
  const resultados = {
    teste: teste.teste,
    qtd_perguntas: qtdPerguntas,
    qtd_Acertos: qtdAcertos,
  };

  // Faz a atualização da lista local
  const listaResultados = await (
    await fetch("http://localhost:3001/resultados")
  ).json();
  const testeExistente = listaResultados.find(
    (item) => item.teste === teste.teste
  );

  if (testeExistente) {
    // Atualiza o objeto existente na lista com as novas informações
    testeExistente.qtd_perguntas += qtdPerguntas;
    testeExistente.qtd_Acertos += qtdAcertos;

    await fetch(`http://localhost:3001/resultados/${testeExistente.teste}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testeExistente),
    });
  } else {
    // Adiciona um novo objeto à lista
    await fetch("http://localhost:3001/resultados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultados),
    });
  }
}

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
    qtdPerguntas++;
  } else {
    botaoProxima.textContent = "Finalizar teste";
    qtdPerguntas++;
  }
  botaoProxima.addEventListener("click", () => {
    const opcaoSelecionada = document.querySelector(
      "input[name='opcoes']:checked"
    ).value;
    if (opcaoSelecionada === perguntaAtual.resposta) {
      qtdAcertos++;
    }
    if (indice < numPerguntas - 1) {
      indicePerguntaAtual++;
      exibirPergunta(indicePerguntaAtual);
    } else {
      localStorage.setItem("qtdAcertos", qtdAcertos);
      cadastraResultados();
      window.location.href = "../html/apresenta_resultado.html";
    }
  });
  divPergunta.appendChild(botaoProxima);
  listaPergunta.innerHTML = "";
  listaPergunta.appendChild(divPergunta);
};

exibirPergunta(indicePerguntaAtual);

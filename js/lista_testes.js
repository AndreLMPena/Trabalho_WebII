// import dados from "../dados/testes.json";

const testes = [
  {
    teste: "Teste da marvel",
    perguntas: [
      {
        pergunta: "Qual desses personagens não faz parte do Aranhaverso?",
        opcaoA: "Tom Holland",
        opcaoB: "Miles Morales",
        opcaoC: "Gwen Stacy",
        opcaoD: "Miguel O'Hara",
        opcaoE: "Peter Porker",
        resposta: "opcaoA",
      },
      {
        pergunta:
          "Qual vilão roubou o corpo do Homem-Aranha e se auto intitulou como o Homem-Aranha Superior?",
        opcaoA: "Norman Osborn",
        opcaoB: "Eddie Brock",
        opcaoC: "Octo Octavius",
        opcaoD: "Curt Connors",
        opcaoE: "Maxwell Dillon",
        resposta: "opcaoC",
      },
    ],
  },
  {
    teste: "Teste da DC",
    perguntas: [
      {
        pergunta: "Qual desses personagens não faz parte da Bat-Família?",
        opcaoA: "Alfred Pennyworth",
        opcaoB: "Dick Grayson",
        opcaoC: "Barbara Gordon",
        opcaoD: "Selina Kyle",
        opcaoE: "Barry Allen",
        resposta: "opcaoE",
      },
      {
        pergunta:
          "Qual desses heróis não faz parte da formação classica da Liga da Justiça?",
        opcaoA: "Superman",
        opcaoB: "Shazam",
        opcaoC: "Batman",
        opcaoD: "Mulher Maravilha",
        opcaoE: "Lanterna Verde",
        resposta: "opcaoB",
      },
    ],
  },
];

const listaTeste = document.getElementById("listaTeste");

const criarBotao = (teste, indice) => {
  const botao = document.createElement("button");
  botao.textContent = teste.teste;
  botao.addEventListener("click", () => {
    // Aqui você pode acessar o objeto correspondente no array de objetos JSON usando o índice do botão clicado:
    const testeSelecionado = testes[indice];
    // Execute sua lógica aqui...
    const url =
      "lista_perguntas.html?teste=" +
      encodeURIComponent(JSON.stringify(testeSelecionado));
    window.location.href = url;
  });
  return botao;
};

const listaBotao = testes.map(criarBotao);

listaBotao.forEach((botao) => {
  listaTeste.appendChild(botao);
});

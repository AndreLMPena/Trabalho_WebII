const cadastraTesteForm = document.getElementById("cadastraTesteForm");

cadastraTesteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // const teste = {
  //   nome: document.getElementById("testname").value,
  //   perguntas: [
  //     {
  //       pergunta: "pergunta?",
  //       opcaoA: "opcao A",
  //       opcaoB: "opcao B",
  //       opcaoC: "opcao C",
  //       opcaoD: "opcao D",
  //       opcaoE: "opcao E",
  //       resposta: "resposta correta",
  //     },
  //   ],
  // };

  // cadastrarTeste(teste);

  // Redireciona para a página de cadastro de perguntas
  window.location.href = "cadastra_perguntas.html";
});

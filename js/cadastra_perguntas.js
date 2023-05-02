// função para limpar os inputs do formulário
function limparInputs() {
  const inputs = document.querySelectorAll("#cadastraPerguntasForm input");
  inputs.forEach((input) => (input.value = ""));
}

const perguntas = [];

const testname = localStorage.getItem("testname");

function adicionarPergunta() {
  const pergunta = document.getElementById("question").value;
  const opcaoA = document.getElementById("opcaoA").value;
  const opcaoB = document.getElementById("opcaoB").value;
  const opcaoC = document.getElementById("opcaoC").value;
  const opcaoD = document.getElementById("opcaoD").value;
  const opcaoE = document.getElementById("opcaoE").value;
  const resposta = document.getElementById("resposta").value;

  let novaPergunta = {
    pergunta: pergunta,
    opcaoA: opcaoA,
    opcaoB: opcaoB,
    opcaoC: opcaoC,
    opcaoD: opcaoD,
    opcaoE: opcaoE,
    resposta: resposta,
  };

  perguntas.push(novaPergunta);
}

async function cadastraTeste() {
  adicionarPergunta();

  const teste = {
    teste: testname,
    perguntas: perguntas,
  };

  // salva o teste no servidor
  const response = await fetch("http://localhost:3001/salvar-dados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teste),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(errorMessage);
    return;
  }
}

function finalizarTeste() {
  cadastraTeste();
  alert("Teste registrado com sucesso!");
  // window.open("../html/lista_testes.html", "_blank");
  window.location.href = "../html/apresenta_resultado.html";
}

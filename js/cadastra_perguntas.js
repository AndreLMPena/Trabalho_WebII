// função para limpar os inputs do formulário
function limparInputs() {
  const inputs = document.querySelectorAll("#cadastraPerguntasForm input");
  inputs.forEach((input) => (input.value = ""));
}

// função para finalizar o teste e voltar para a página home
function finalizarTeste(event) {
  event.preventDefault(); // previne o comportamento padrão do submit do formulário
  alert("Teste registrado com sucesso!");
  window.location.href = "lista_testes.html"; // redireciona para a página home
}

// adiciona o evento de click no botão "Adicionar pergunta!"
document
  .querySelector('#cadastraPerguntasForm button[type="button"]')
  .addEventListener("click", limparInputs);

// adiciona o evento de submit no formulário para finalizar o teste
document
  .querySelector("#cadastraPerguntasForm")
  .addEventListener("submit", finalizarTeste);

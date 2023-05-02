const cadastraTesteForm = document.getElementById("cadastraTesteForm");

cadastraTesteForm.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que o formulário seja enviado

  const testname = document.getElementById("testname").value;
  localStorage.setItem("testname", testname);
  // redireciona para a página de cadastro de perguntas
  window.open("../html/cadastra_perguntas.html", "_self");
});

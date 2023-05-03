const qtdAcertos = localStorage.getItem("qtdAcertos");
document.getElementById(
  "resultado"
).textContent = `Você acertou ${qtdAcertos} perguntas!`;

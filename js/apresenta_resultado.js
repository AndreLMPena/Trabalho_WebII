const numAcertos = localStorage.getItem("numAcertos");
document.getElementById(
  "resultado"
).textContent = `Você acertou ${numAcertos} perguntas!`;

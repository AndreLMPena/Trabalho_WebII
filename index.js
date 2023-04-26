const express = require("express");
const app = express();
const fs = require("fs");

app.listen(3001, () => {
  console.log("Server started on port 3000");
});

function cadastrarTeste(teste) {
  // Carrega o arquivo JSON de testes
  const testes = JSON.parse(fs.readFileSync("dados/testes.json"));

  // Adiciona o novo teste ao array de testes
  testes.push(teste);

  // Salva o array atualizado de volta no arquivo JSON
  fs.writeFileSync("dados/testes.json", JSON.stringify(testes));
}

// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/salvar-dados", (req, res) => {
  const dados = req.body;

  fs.readFile("./dados/testes.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao ler os dados");
      return;
    }

    let testes;
    if (data.trim() === "") {
      testes = [];
    } else {
      testes = JSON.parse(data);
    }

    testes.push(dados);
    const json = JSON.stringify(testes);

    fs.writeFile("./dados/testes.json", json, "utf8", (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erro ao salvar os dados");
        return;
      }

      res.send("Dados salvos com sucesso");
    });
  });
});

app.post("/resultados", (req, res) => {
  const dados = req.body;

  fs.readFile("./dados/resultados.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao ler os dados");
      return;
    }

    let testes;
    if (data.trim() === "") {
      testes = [];
    } else {
      testes = JSON.parse(data);
    }

    testes.push(dados);
    const json = JSON.stringify(testes);

    fs.writeFile("./dados/resultados.json", json, "utf8", (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erro ao salvar os dados");
        return;
      }

      res.send("Dados salvos com sucesso");
    });
  });
});

app.put("/resultados/:teste", (req, res) => {
  const dados = req.body;
  const teste = req.params.teste;

  fs.readFile("./dados/resultados.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao ler os dados");
      return;
    }

    let testes;
    if (data.trim() === "") {
      testes = [];
    } else {
      testes = JSON.parse(data);
    }

    let indice = -1;
    for (let i = 0; i < testes.length; i++) {
      if (testes[i].teste === teste) {
        indice = i;
        break;
      }
    }

    if (indice === -1) {
      res.status(404).send("Teste não encontrado");
      return;
    }

    testes[indice] = {
      teste: teste,
      qtd_perguntas: dados.qtd_perguntas,
      qtd_Acertos: dados.qtd_Acertos,
    };

    const json = JSON.stringify(testes);

    fs.writeFile("./dados/resultados.json", json, "utf8", (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erro ao salvar os dados");
        return;
      }

      res.send("Dados atualizados com sucesso");
    });
  });
});

app.get("/testes", (req, res) => {
  fs.readFile("./dados/testes.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao ler os dados");
      return;
    }
    const testes = JSON.parse(data);
    res.json(testes);
  });
});

app.get("/resultados", (req, res) => {
  fs.readFile("./dados/resultados.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao ler os dados");
      return;
    }
    const testes = JSON.parse(data);
    res.json(testes);
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

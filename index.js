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

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

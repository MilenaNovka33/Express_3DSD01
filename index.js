const express = require("express");
const app = express();

const PORT = 3331;

// Criação das rotas

app.use(express.static(__dirname + "public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});

// Criar rota 404 (MIDDLEWARE)

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running... " + PORT);
});

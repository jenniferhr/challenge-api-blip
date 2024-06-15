const express = require("express");
const router = require("./routes/router");

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})
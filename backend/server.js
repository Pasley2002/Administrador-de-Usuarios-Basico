const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("El backend está funcionando");
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});

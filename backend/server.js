const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("El backend está funcionando");
});

app.post("/users", (req, res) => {
  const { nombre, apellido, edad } = req.body;

  if (!nombre || !apellido || !edad) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    });
  }

  if (edad < 18) {
    return res.status(400).json({
      error: "La edad mínima es 18 años"
    });
  }
  
  console.log(req.body);

  res.json({
    mensaje: "El usuario fue recibido",
    datos: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});

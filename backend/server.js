const express = require("express");
const cors = require("cors");

// =============================
// Almacenamiento en memoria, simulando una base de datos.
// Los datos se pierden al reiniciar el servidor.
// =============================
const users = [];
let nextUserId = 1;

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta simple para verificar que el backend está activo
app.get("/", (_req, res) => {
  res.send("El backend está funcionando");
});

// =============================
// Crear usuario
// =============================
app.post("/users", (req, res) => {
  const { nombre, apellido, edad } = req.body;

  // Validación: Todos los campos son obligatorios
  if (!nombre || !apellido || !edad) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    });
  }

  // Sub-Validación: Solo mayores de edad
  if (edad < 18) {
    return res.status(400).json({
      error: "La edad mínima es 18 años"
    });
  }
  
  console.log(req.body);

  // El backend construye el usuario y define sus valores
  const nuevoUsuario = {
    id: nextUserId,
    nombre,
    apellido,
    edad,
    estado: "activo",
  };

  users.push(nuevoUsuario);
  nextUserId++;

  res.status(201).json({
    mensaje: "Usuario creado correctamente",
    usuario: nuevoUsuario,
  });

});

// =============================
// Listar usuarios
// =============================
app.get("/users", (_req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});

// Backend CRUD básico de usuarios con Express.
// Usa almacenamiento en memoria (array) — no base de datos.
// Pensado para aprendizaje de rutas REST + validaciones.

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

// Middlewares globales:
// cors → permite llamadas desde frontend en otro puerto
// express.json → permite leer JSON enviado en el body
app.use(cors());
app.use(express.json());

// Ruta simple de prueba de vida del backend
app.get("/", (_req, res) => {
  res.send("El backend está funcionando");
});

// =============================
// Crear usuario
// =============================

// Crea un nuevo usuario validando datos mínimos requeridos
app.post("/users", (req, res) => {
  const { nombre, apellido, edad } = req.body;

  // Validación de campos obligatorios
  if (!nombre || !apellido || !edad) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    });
  }

  // Regla de negocio: solo mayores de edad
  if (edad < 18) {
    return res.status(400).json({
      error: "La edad mínima es 18 años"
    });
  }

  // Construcción del objeto usuario
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

// Devuelve todos los usuarios en memoria
app.get("/users", (_req, res) => {
  res.json(users);
});

// =============================
// Eliminar usuario por ID
// =============================

// Busca índice y elimina del array
// findIndex devuelve -1 si no existe
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  const eliminado = users.splice(index, 1);

  res.json({
    mensaje: "Usuario eliminado",
    usuario: eliminado[0]
  });
})

// =============================
// Editar usuario por ID
// =============================

// find devuelve el objeto directamente para poder modificarlo
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nombre, apellido, edad } = req.body;

  const usuario = users.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

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

  // Actualización de campos
  usuario.nombre = nombre;
  usuario.apellido = apellido;
  usuario.edad = edad;

  res.json({
    mensaje: "Usuario actualizado",
    usuario
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});

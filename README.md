# Administrador de Usuarios — CRUD Básico (Node + Express + JS)

Proyecto de práctica full-stack básico que implementa un CRUD de usuarios con backend en Node.js + Express y frontend en HTML/CSS/JavaScript puro.

Permite crear, listar, editar y eliminar usuarios mediante una API REST y una interfaz simple conectada por fetch.

---

## 🚀 Funcionalidades

- Crear usuarios
- Listar usuarios
- Editar usuarios
- Eliminar usuarios
- Validaciones de datos (campos obligatorios y edad mínima)
- Mensajes de error y éxito en pantalla
- Edición desde el frontend con reutilización de formulario
- Estado de edición manejado en cliente
- CRUD completo conectado frontend ↔ backend

---

## 🧱 Tecnologías usadas

### Backend
- Node.js
- Express
- CORS

### Frontend
- HTML
- CSS
- JavaScript (fetch API)

---

## 📡 Endpoints

### GET /users
Devuelve la lista de usuarios.

---

### POST /users
Crea un usuario.

Body JSON:

```json
{
  "nombre": "Juan",
  "apellido": "Perez",
  "edad": 25
}
```

---

### PUT /users/:id
Actualiza un usuario existente por ID.

---

### DELETE /users/:id
Elimina un usuario por ID.

---

## ▶️ Cómo ejecutar el proyecto

### Backend

```bash
cd backend
npm install
node server.js
```

Aclaración: El servidor estará disponible en http://localhost:3000

### Frontend

Abrir el archivo: frontend/index.html


Opciones para ejecutarlo:

- Abrir directamente en el navegador (doble click)
- O usar la extensión **Live Server** en VS Code (recomendado)

Con Live Server:
1. Click derecho sobre `index.html`
2. Elegir **Open with Live Server**
3. Se abrirá en el navegador con recarga automática

---

## 🗃️ Persistencia de datos

Los usuarios se almacenan en memoria (array en el servidor).  
Los datos se pierden al reiniciar el backend.  
Este proyecto es educativo y no usa base de datos.

---

## 📚 Objetivos de aprendizaje

- Implementar un CRUD completo
- Entender rutas REST (GET, POST, PUT, DELETE)
- Conectar frontend y backend
- Usar fetch para consumir APIs
- Manejar estado de edición en frontend
- Aplicar validaciones de datos

---

## 🔧 Posibles mejoras futuras

- Integrar base de datos real
- Validación frontend más avanzada
- Mejoras visuales de UI/UX
- Búsqueda y filtros
- Autenticación de usuarios

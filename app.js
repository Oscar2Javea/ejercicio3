const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

// Ruta para manejar rutas inexistentes
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
module.exports = app;
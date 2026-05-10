const request = require('supertest');
const app = require('./app');

describe('Rutas GET', () => {
  test('GET /books devuelve mensaje', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Lista de libros');
  });

  test('GET /authors devuelve mensaje', async () => {
    const res = await request(app).get('/authors');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Lista de autores');
  });

  test('Ruta inexistente devuelve 404', async () => {
    const res = await request(app).get('/ruta-que-no-existe');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Ruta no encontrada');
  });
});
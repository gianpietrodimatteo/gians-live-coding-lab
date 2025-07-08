const app = require('../../app');
const request = require('supertest');

test('list all books', async () => {
    const response = await request(app)
    .get('/books')
    .expect('Content-Type', /json/)
    .expect(200);

    expect(response.body).toHaveLength(4);
    expect(response.body[0]).toHaveProperty('title');
});
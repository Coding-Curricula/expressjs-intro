const express = require('express');

const app = express();

app.use(express.json()); // parse the body of the request

const PORT = 8080;

app.get('/', (req, res) => res.send('Hello Team!'));

app.get('/about', (req, res) => res.send('About us'));

app.post('/login', (req, res) => res.send('POST request at /login'));

app.put('/cart', (req, res) => {
    res.send('PUT request at /cart');
})

app.delete('/cart', (req, res) => {
    res.send('DELETE request at /cart');
})

// GET product by id
app.get('/product/:name/:job/:id', (req, res) => {
    res.json(req.params);
})

// POST - /register - create new user
app.post('/register', (req, res) => {
    res.json(req.body);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
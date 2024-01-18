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

const fruits = [
    { id: 1, name: 'apple', price: 10 },
    { id: 2, name: 'Banana', price: 15 },
    { id: 3, name: 'Orange', price: 20 },
    { id: 4, name: 'Pineapple', price: 25 },
    { id: 5, name: 'Strawberry', price: 30 }
]

// GET - /fruits - all fruits
app.get('/fruits', (req, res) => {
    res.json(fruits);
})

// GET - /fruits/:id - get specific fruit by id
app.get('/fruits/:id', (req, res) => {
    for (let fruit of fruits) {
        if (fruit.id == req.params.id) {
            return res.json(fruit);
        }
    }
    res.json({ message: 'No fruit found' });
})

// GET - /fruits/name/:name - get fruit by name
app.get('/fruits/name/:name', (req, res) => {
    for (let fruit of fruits) {
        if (fruit.name == req.params.name) {
            return res.json(fruit);
        }
    }
    res.json({ message: 'No fruit found' });
})

// POST - /fruits - create new fruit 
app.post('/fruits', (req, res) => {
    const fruit = {
        id: fruits.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    fruits.push(fruit);
    res.json(fruit);
})

// PUT - /fruits/:id - update fruit by id
app.put('/fruits/:id', (req, res) => {
    for (let fruit of fruits) {
        if (fruit.id == req.params.id) {
            fruit.name = req.body.name;
            fruit.price = req.body.price;
            return res.json(fruit);
        }
    }
    res.json({ message: 'No fruit found' });
})

// DELETE - /fruits/:id - delete fruit by id
app.delete('/fruits/:id', (req, res) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].id == req.params.id) {
            fruits.splice(i, 1);
            return res.json({ message: 'Fruit deleted' });
        }
    }
    res.json({ message: 'No fruit found' });
})

// DELETE - /fruits - delete all fruits
app.delete('/fruits', (req, res) => {
    fruits.splice(0, fruits.length);
    res.json({ message: 'All fruits deleted' });
})

// DELETE - /fruits/name/:name - delete fruit by name
app.delete('/fruits/name/:name', (req, res) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].name == req.params.name) {
            fruits.splice(i, 1);
            return res.json({ message: 'Fruit deleted' });
        }
    }
    res.json({ message: 'No fruit found' });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const express = require('express');
const {join, dirname} = require('path');

const app = express();

app.set('view engine', 'ejs');

const { fileURLToPath } = require('url');


app.use('/public/', express.static(join(__dirname, 'public')));

//routes

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/templates/index.html'));
});

app.get('/nocart', (req, res) => {
    res.sendFile(join(__dirname, '/templates/nocart.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(join(__dirname, '/templates/cart.html'));
});

app.get ('/article', (req, res) => {
    res.sendFile(join(__dirname, '/templates/article.html'));
});

app.get ('/category', (req, res) => {
    res.sendFile(join(__dirname, '/templates/category.html'));
});

app.get ('/favorite', (req, res) => {
    res.sendFile(join(__dirname, '/templates/fav.html'));
});

app.get ('/test', (req, res) => {
    res.sendFile(join(__dirname, '/templates/test.html'));
});

app.get ('/ejs', (req, res) => { 
    ListPoeple = [	{ name: 'thierry', age: 25, job: 'etudiant'},
                    { name: 'toto', age: 12, job: 'ingenieur'},
                    { name: 'tata', age: 35, job: 'medecin'}];
    res.render('index',{Users : ListPoeple} );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const {join, dirname} = require('path');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, '/templates'));


const { fileURLToPath } = require('url');


app.use('/public/', express.static(join(__dirname, 'public')));

//routes

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/templates/index.ejs'));
});

app.get('/nocart', (req, res) => {
    res.sendFile(join(__dirname, '/templates/nocart.ejs'));
});

app.get('/cart', (req, res) => {
    res.sendFile(join(__dirname, '/templates/cart.ejs'));
});

app.get ('/article', (req, res) => {
    res.sendFile(join(__dirname, '/templates/article.ejs'));
});

app.get ('/category', (req, res) => {
    res.sendFile(join(__dirname, '/templates/category.ejs'));
});

app.get ('/favorite', (req, res) => {
    res.sendFile(join(__dirname, '/templates/fav.ejs'));
});

app.get ('/test', (req, res) => {
    res.sendFile(join(__dirname, '/templates/test.ejs'));
});

app.get ('/ejs', async (req, res) => { 
    await axios.get('https://rickandmortyapi.com/api/character').then(response => {
        res.render('index', {characters: response.data.results});
    }).catch(error => {
        res.render('erreur', {message : error.message, code : error.response.status});
    });
   
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const {join, dirname} = require('path');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'templates'));


const { fileURLToPath } = require('url');


app.use('/public/', express.static(join(__dirname, 'public')));

//routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/nocart', (req, res) => {
    res.render('nocart');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get ('/article', (req, res) => {
    res.render('article');
});

app.get ('/category', async (req, res) => {
    await axios.get('http://localhost:3000/api/jerseys').then(response => {
        res.render('category', {jerseys: response.data});
    }).catch(error => {
        res.render('erreur', {message : error.message, code : error.response.status});
    });
   
});

app.get ('/favorite', (req, res) => {
    res.render('fav');
});

app.get ('/test', (req, res) => {
    res.sendFile(join(__dirname, '/templates/test.ejs'));
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

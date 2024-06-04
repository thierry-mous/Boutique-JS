module.exports = (app) => {
    const jersey = require('../controller/jersey.controller.js');

    let routeur = require('express').Router();

    routeur.get('/jerseys', jersey.getJersey);

    routeur.get('/jerseys/:id', jersey.getJerseyById);

    app.use('/api', routeur);
}


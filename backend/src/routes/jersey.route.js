module.exports = (app) => {
    const jersey = require('../controller/jersey.controller.js');

    let routeur = require('express').Router();

    routeur.get('/jerseys', jersey.getJersey);

    app.use('/api', routeur);
}


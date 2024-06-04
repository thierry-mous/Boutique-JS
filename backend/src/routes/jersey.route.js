module.exports = (app) => {
    const teams = require('../controller/jersey.controller.js');

    let routeur = require('express').Router();

    routeur.get('/jerseys', teams.getTeams);

    app.use('/api', routeur);
}


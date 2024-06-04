module.exports = (app) => {
    const teams = require('../controller/teams.controller.js');

    let routeur = require('express').Router();

    routeur.get('/teams', teams.getTeams);

    app.use('/api', routeur);
}


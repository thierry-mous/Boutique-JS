module.exports = (app) => {
    const promo = require('../controller/promo.controller.js');

    let routeur = require('express').Router();

    routeur.post('/promo', promo.getPromo);

    

    app.use('/api', routeur);
}


module.exports = (app) => {
    const stock = require('../controller/stock.controller.js');

    let routeur = require('express').Router();

    routeur.put('/stock', stock.removeFromStock);


    

    app.use('/api', routeur);
}

const stock = require('../modeles/stock.modele');

class ControllerStock {
    static removeFromStock(req, res) {
        const jersey = req.body;
    
        stock.removeFromStock(jersey, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while delete jersey stock.'
                });
            } else {
                res.json(data);
            }
        });
    }      
   
}

module.exports = ControllerStock;
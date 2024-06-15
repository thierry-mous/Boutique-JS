const promo = require('../modeles/promo.modele');

class ControllerPromo {
    static getPromo(req, res) {
        const code = req.body.code;
        console.log(code);
        promo.getPromo(code, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving promo.'
                });
            } else {
                res.json(data);
            }
        });
    }      
   
}

module.exports = ControllerPromo;
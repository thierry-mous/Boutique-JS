const Jersey = require('../modeles/jersey.modele');

class ControllerJersey {
    static getJersey(req, res) {
        const id_jersey = req.query.id_jersey;

        Jersey.getJerseys(id_jersey, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving jersey.'
                });
            } else {
                res.json(data);
            }
        });
    }
}

module.exports = ControllerJersey;
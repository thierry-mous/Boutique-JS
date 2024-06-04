const Jersey = require('../modeles/jersey.modele');

class ControllerJersey {
    static getJersey(req, res) {
        const id_jersey = req.query.id_jersey;

        Teams.getJersey(id_jersey, (err, data) => {
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

module.exports = ControllerTeams;
const Teams = require('../modeles/teams.modele');

class ControllerTeams {
    static getTeams(req, res) {
        const id_team = req.query.id_team;

        Teams.getTeams(id_team, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving teams.'
                });
            } else {
                res.json(data);
            }
        });
    }
}

module.exports = ControllerTeams;
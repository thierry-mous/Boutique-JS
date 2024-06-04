const Teams = require('../modeles/teams.modele');
const Jersey = require('../modeles/jersey.modele');

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

    static getJersayByIdTeam(req, res) {
        const id = req.params.id;
        if (!id || +id <= 0 || isNaN(+id)) {
            return res.status(400).send({response:400, message: 'Invalid id'});
        }
       Teams.getTeamsById(id).then(dataTeams => {
        Jersey.getJerseysByIdTeam(id).then(dataJerseys => {
            res.json({response: 200, data : {teams: dataTeams, jerseys: dataJerseys}});
        }).catch(err => {
            if (err.message == 'not_found') {
                res.send({response: 200, data : {teams: dataTeams, jerseys: []}});
                return;
            }
            return res.status(500).send({response: 500,message: err.message || 'Some error occurred while retrieving teams.' });
        })}).catch(err => {
            if (err.message == 'not_found') {
                return res.status(404).send({response: 404, message: 'Team not found'});
            }
            return res.status(500).send({message: err.message || 'Some error occurred while retrieving teams.' });
        });
    }
}

module.exports = ControllerTeams;
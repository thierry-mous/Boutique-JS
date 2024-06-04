const db = require('../utility/config.js');

class ModeleTeam {
    constructor(team) {
        this.id_team = team.id_team;
        this.name = team.name;
        this.city = team.city;
        this.description = team.description;
        this.image = team.image;
    }

    static getTeams(id_team, result) {
        let sqlQuery = 'SELECT * FROM team';
        
        console.log(id_team);
        if (id_team) {
            sqlQuery += ` WHERE id_team = ${id_team}`;
        }

        db.query(sqlQuery, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
}

module.exports = ModeleTeam;
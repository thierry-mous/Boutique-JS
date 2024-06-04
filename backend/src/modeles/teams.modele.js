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

    static getTeamsById(id, result) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM team WHERE id_team = ${id}`, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (res.length) {
                    resolve(res[0]);
                    return;
                }
                reject({ message: 'not_found' });
            });
        });
        db.query(`SELECT * FROM team WHERE id_team = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            result({ message: 'not_found' }, null);
        });
    }
}

module.exports = ModeleTeam;
const db = require('../utility/config.js');

class ModeleJersey {
    constructor(jersey) {
        this.id_jersey = jersey.id_jersey;
        this.name = jersey.name;
        this.price = jersey.price;
        this.description = jersey.description;
        this.image = jersey.image;
        this.details = jersey.details;
        this.gender = jersey.gender;
        this.color = jersey.color;
    }

    static getJerseys(id_jersey, result) {
        let sqlQuery = 'SELECT * FROM jersey';
        
        console.log(id_jersey);
        if (id_jersey) {
            sqlQuery += ` WHERE id_jersey = ${id_jersey}`;
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
    static getJerseysByIdTeam(id, result) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM jersey WHERE id_team = ${id}`, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                if (res.length) {
                    resolve(res);
                    return;
                }
                reject({ message: 'not_found' });
            });
        });
        db.query(`SELECT * FROM jersey WHERE id_jersey = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            result({ kind: 'not_found' }, null);
        });
    }
static getJerseysById(id, result) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM jersey WHERE id_jersey = ${id}`, (err, res) => {
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
        db.query(`SELECT * FROM jersey WHERE id_jersey = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0]);
                return;
            }
            result({ kind: 'not_found' }, null);
        });
    }
}

module.exports = ModeleJersey;
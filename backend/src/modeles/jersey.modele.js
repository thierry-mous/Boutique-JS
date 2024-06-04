const db = require('../utility/config.js');

class ModeleJersey {
    constructor(jersey) {
        this.id_jersey = jersey.id_jersey;
        this.name = jersey.name;
        this.city = jersey.city;
        this.description = jersey.description;
        this.image = jersey.image;
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
}

module.exports = Modelejersey;
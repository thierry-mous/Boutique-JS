const db = require('../utility/config.js');

class ModelePromo {
    
    static getPromo(code, result) {
        let sqlQuery = 'SELECT * FROM reduction WHERE name = ?';
        db.query(sqlQuery, [code], (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }

}


module.exports = ModelePromo;
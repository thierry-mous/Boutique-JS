const db = require('../utility/config.js');

class ModeleStock {
    
    static removeFromStock(jersey, result) {
        let sqlQuery = 'update stock set stock = stock - ? where id_jersey = ? and id_size = ?';
        db.query(sqlQuery, [jersey.quantity, jersey.id_jersey, jersey.id_size], (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }

}


module.exports = ModeleStock;
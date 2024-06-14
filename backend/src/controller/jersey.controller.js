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
    static getJerseyById(req, res) {
        const id = req.params.id;
        if (!id || +id <= 0 || isNaN(+id)) {
            return res.status(400).send({response:400, message: 'Invalid id'});
        }
        Jersey.getJerseysById(id).then(data => {
            Jersey.getRecommendations(id).then(recommendations => {
                return res.json({response: 200, data: {product:data, recommendations: recommendations}});
            }).catch(err => {
                if(err.message == 'not_found') {
                    return res.status(404).send({response: 404, message: 'recommandation not found'});
                }
                return res.status(500).send({message: err.message || 'Some error occurred while retrieving jersey.' });
            });
        }).catch(err => {
            if (err.message == 'not_found') {
                return res.status(404).send({response: 404, message: 'Jersey not found'});
            }
            return res.status(500).send({message: err.message || 'Some error occurred while retrieving jersey.' });
        });

    }
    
    static getRecommendations(req, res) {
        const id = req.params.id;
        if (!id || +id <= 0 || isNaN(+id)) {
            return res.status(400).send({response:400, message: 'Invalid id'});
        }
        Jersey.getJerseysByIdTeam(id).then(data => {
            res.json({response: 200, data: data});
        }).catch(err => {
            if (err.message == 'not_found') {
                return res.status(404).send({response: 404, message: 'Jersey not found'});
            }
            return res.status(500).send({message: err.message || 'Some error occurred while retrieving jersey.' });
        });
    }
    
   static getGenderJersey(req, res) {
        const id_gender = req.params.id
        if (!id_gender || +id_gender <= 0 || isNaN(+id_gender)||!(1 <= id_gender & id_gender <= 2 ) ){
            return res.status(400).send({response:400, message: 'Invalid id'});
        }
        Jersey.getGender(id_gender).then(data => {
            res.json({response: 200, data: data});
        }).catch(err => {
            if (err.message == 'not_found') {
                return res.status(404).send({response: 404, message: 'Jersey not found'});
            }
            return res.status(500).send({message: err.message || 'Some error occurred while retrieving jersey.' });
        });
   }
            
            
   
}

module.exports = ControllerJersey;
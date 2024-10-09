const businessLogic = require('../businessLogic/logic')
const { writeJson } = require('../../writer');

module.exports.getWelcomeMessage = function getWelcomeMessage(req, res) {
    const name = req.swagger.params.content_type.value;
    businessLogic.getWelcomeMessage(name)
        .then((response) => {
            writeJson(res, response, 200);
            // res.status(200).json(response)
        })
        .catch((error) => {
            writeJson(res, error, error.status);
            // res.status(400).json(error)
        });
};

module.exports.userDetails = function userDetails(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    businessLogic.userDetails(email,password)
        .then((response) => {
            writeJson(res, response, 200);
            // res.status(200).json(response)
        })
        .catch((error) => {
            writeJson(res, error, error.status);
            // res.status(400).json(error)
        });
};
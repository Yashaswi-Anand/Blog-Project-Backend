const serverResponce = require("../config/responses");

module.exports = {
    async loginUser(req, res) {
        try {
            serverResponce.successResponse(res, 'Successfully Login', []);
        } catch (error) {
            console.log(error);
        }
    }
}
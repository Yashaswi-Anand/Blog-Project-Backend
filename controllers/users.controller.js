const serverResponce = require("../config/responses");
const prisma = require("../db_config/db_config");

module.exports = {
    async loginUser(req, res) {
        try {
            const { username, password } = req.body;

            const user = await prisma.user.findFirst({
                where: { username }
            });

            if (!user) {
                return serverResponce.errorResponse(res, 'User not found | Unable to login', 404);
            }

            if (user.password !== password) {
                return serverResponce.errorResponse(res, 'Invalid password', 401);
            }

            return serverResponce.successResponse(res, 'Successfully Logged In', user);
        } catch (error) {
            console.error(error);
            return serverResponce.errorResponse(res, 'Internal Server Error', 500);
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await prisma.user.findMany({ where: { deleted: false } });
            serverResponce.successResponse(res, 'Successfully Login', users);
        } catch (error) {
            console.log(error);
        }
    }
}
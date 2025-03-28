const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


prisma.$use(async (params, next) => {
    // Check incoming query type
    if (params.model == 'users') {
      if (params.action == 'delete') {
        params.action = 'update'
        params.args['data'] = { deleted: true }
      }
      if (params.action == 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data != undefined) {
          params.args.data['deleted'] = true
        } else {
          params.args['data'] = { deleted: true }
        }
      }
    }
    return next(params)
})


module.exports = prisma;
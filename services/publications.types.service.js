const models = require("../database/models");

class PublicationsTypesService {
  constructor() {} // prueba git

  async findAndCount(query) {
    const options = {
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { id } = query;
    if (id) {
      options.where.id = id;
    }

    const { name } = query;
    if (name) {
      options.where.name = { [Op.iLike]: `%${name}%` };
    }

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true;

    const publicationstype = await models.publicationstypes.findAndCountAll(
      options
    );
    return publicationstype;
  }
  async getAllPublicationsTypes(query) {
    const options = {
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { id } = query;
    if (id) {
      options.where.id = id;
    }

    const { name } = query;
    if (name) {
      options.where.name = { [Op.iLike]: `%${name}%` };
    }
    try {
      const result = await models.publicationsTypes.findAll(options);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async;
}

module.exports = PublicationsTypesService;

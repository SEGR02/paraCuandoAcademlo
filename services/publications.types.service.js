const models = require("../database/models");

class PublicationsTypesServices {
  constructor() {}

  static async findAndCount(query) {
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

  static async getAllPublicationsTypes() {
    try {
      const result = await models.publicationstypes.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PublicationsTypesServices;

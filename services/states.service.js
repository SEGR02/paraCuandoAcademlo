const models = require("../database/models");
const { Op } = require("sequelize");
const { CustomError } = require("../utils/helpers");

class StatesService {
  constructor() {}

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

    const states = await models.States.findAndCountAll(options);
    return states;
  }

  async getAll() {
    let state = await models.States.findAll();
    if (!state) throw new CustomError("Not found State", 404, "Not Found");
    return state;
  }
}

module.exports = StatesService;

const models = require("../database/models");
const { Op } = require("sequelize");
const { CustomError } = require("../utils/helpers");

class CitiesService {
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

    const cities = await models.Cities.findAndCountAll(options);
    return cities;
  }

  async getAll() {
    let city = await models.Cities.findAll();
    if (!city) throw new CustomError("Not found City", 404, "Not Found");
    return city;
  }
}

module.exports = CitiesService;

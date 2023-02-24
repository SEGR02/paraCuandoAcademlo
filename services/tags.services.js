const models = require("../database/models");
const { v4: uuid4 } = require("uuid");
const { Op } = require("sequelize");
const { CustomError } = require("../utils/helpers");
const { hashPassword } = require("../libs/bcrypt");
const tags = require("../database/models/tags");

class TagsService {
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
    const { description } = query;
    if (description) {
      options.where.description = { [Op.iLike]: `%${description}%` };
    }
    const { image_url } = query;
    if (image_url) {
      options.where.image_url = { [Op.iLike]: `%${image_url}%` };
    }

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true;

    const tags = await models.Tags.findAndCountAll(options);
    return tags;
  }

  async getAllTags() {
    try {
      const tag = await models.Tags.findAll();
      // if (!user) throw new CustomError("Not found User", 404, "Not Found");
      return tag;
    } catch (error) {
      throw error;
    }
  }

  async create(newTag) {
    const transaction = await models.sequelize.transaction();
    try {
      const tag = await models.Tags.create(tag, { transaction });
      await transaction.commit();
      return newTag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getTagById(id) {
    const tag = await models.Tags.findByPk(id);
    if (!tag) throw new CustomError("Not found Tag", 404, "Not Found");
    return tag;
  }

  async editedTag(id, obj) {
    const transaction = await models.sequelize.transaction();
    try {
      const tag = await models.Tags.findByPk(id);

      if (!tag) throw new CustomError("Not found Tag", 404, "Not Found");

      const updatedTag = await tag.update(obj, { transaction });

      await transaction.commit();

      return updatedTag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async removeTag(id) {
    const transaction = await models.sequelize.transaction();
    try {
      const tag = await models.Tags.findByPk(id);

      if (!tag) throw new CustomError("Not found Tag", 404, "Not Found");

      await tag.destroy({ transaction });

      await transaction.commit();

      return tag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = TagsService;

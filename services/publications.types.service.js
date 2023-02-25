const models = require("../database/models");

class PublicationsTypesServices {
  constructor() {}
  static async getAllPublicationsTypes() {
    try {
      const result = await models.publicationtypes.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PublicationsTypesServices;

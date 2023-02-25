const db = require("../database/models");
const PublicationsTypesServices = require("../services/publications.types.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const getAllPublicationsTypes = async (req, res, next) => {
  if (req.isAdmin || req.token) {
    try {
      const result = await PublicationsTypesServices.getAllPublicationsTypes();
      // const pagination = getPagingData(result);
      if (result) res.json(result);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  }
};

module.exports = { getAllPublicationsTypes };

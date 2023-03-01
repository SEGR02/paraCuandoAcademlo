const db = require("../database/models");
const PublicationsTypesServices = require("../services/publications.types.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const getAllPublicationsTypes = async (req, res, next) => {
  if (req.isAdmin || req.token) {
    try {
      let query = req.query;
      let { page, size } = query;

      const { limit, offset } = getPagination(page, size, "10");
      query.limit = limit;
      query.offset = offset;

      const result = await PublicationsTypesServices.findAndCount(query);
      const pagination = getPagingData(result, page, limit);
      if (result) res.json(pagination);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  }
};

const getAllPublicationsId = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports = { getAllPublicationsTypes };

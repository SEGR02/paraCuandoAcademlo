const db = require("../database/models");
const PublicationsTypesService = require("../services/publications.types.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const publicationsTypesService = new PublicationsTypesService();

const getAllPublicationsTypes = async (req, res, next) => {
  if (req.isAdmin || req.token) {
    try {
      let query = req.query;
      let { page, size } = query;

      const { limit, offset } = getPagination(page, size, "10");
      query.limit = limit;
      query.offset = offset;

      const result = await publicationsTypesService.findAndCount(query);
      const pagination = getPagingData(result, page, limit);
      return res.json(pagination);
    } catch (error) {
      next(error);
    }
  }
};

const getAllPublicationsId = async (req, res, next) => {
  const { id } = req.params;
  if (req.isAdmin || req.token) {
    try {
      const result = await publicationsTypesService.getPublicationsTypeById(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized option only for admin or the same user" });
  }
};
module.exports = { getAllPublicationsTypes, getAllPublicationsId };

const CitiesService = require("../services/cities.services");
const { getPagination, getPagingData } = require("../utils/helpers");

const citiesService = new CitiesService();

const getAllCities = async (request, response, next) => {
  if (request.isAdmin || request.token) {
    try {
      let query = request.query;
      let { page, size } = query;

      const { limit, offset } = getPagination(page, size, "10");
      query.limit = limit;
      query.offset = offset;

      let city = await citiesService.findAndCount(query);
      const results = getPagingData(city, page, limit);
      return response.json(results);
    } catch (error) {
      next(error);
    }
  } else {
    response.status(401).json({ message: "Unauthorized option only for user" });
  }
};

module.exports = { getAllCities };

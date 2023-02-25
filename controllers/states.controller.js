const StatesService = require("../services/states.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const statesService = new StatesService();

const getAllStates = async (request, response, next) => {
  if (request.isAdmin || request.token) {
    try {
      let query = request.query;
      let { page, size } = query;

      const { limit, offset } = getPagination(page, size, "10");
      query.limit = limit;
      query.offset = offset;

      let state = await statesService.getAll();
      const results = getPagingData(state, page, limit);
      return response.json({ results: state });
    } catch (error) {
      next(error);
    }
  } else {
    response.status(401).json({ message: "Unauthorized option only for user" });
  }
};

module.exports = { getAllStates };

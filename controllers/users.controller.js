const UsersService = require("../services/users.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const usersService = new UsersService();

const getAllUsers = async (request, response, next) => {
  try {
    let query = request.query;
    let { page, size } = query;

    const { limit, offset } = getPagination(page, size, "10");
    query.limit = limit;
    query.offset = offset;

    let users = await usersService.getAll();
    const results = getPagingData(users, page, limit);
    return response.json({ results: users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const users = await usersService.getUserOr404(id);
    return response.json({ result: users });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getUserById };

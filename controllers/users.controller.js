const UsersService = require("../services/users.service");
const { getPagination, getPagingData } = require("../utils/helpers");

const usersService = new UsersService();

const getAllUsers = async (request, response, next) => {
  if (request.isAdmin == true) {
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
  } else {
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin" });
  }
};

const getUserById = async (request, response, next) => {
  const { id } = request.params;
  if (request.isAdmin == true || request.token.id == id) {
    try {
      const users = await usersService.getUserOr404(id);
      return response.json({ results: users });
    } catch (error) {
      next(error);
    }
  } else
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin or the same user" });
};

const updateUser = async (request, response, next) => {
  const { id } = request.params;
  if (request.isAdmin == true || request.token.id == id) {
    try {
      const { first_name, last_name, code_phone, phone, image_url } =
        request.body;
      const obj = {};
      obj.first_name = first_name;
      obj.last_name = last_name;
      obj.code_phone = code_phone;
      obj.phone = phone;
      obj.image_url = image_url;
      if (
        first_name == null &&
        last_name == null &&
        code_phone == null &&
        phone == null &&
        image_url == null
      ) {
        return response.status(400).json({ message: "bad request" });
      }
      const user = await usersService.updateUser(id, obj);
      return response.json({ results: user });
    } catch (error) {
      next(error);
    }
  } else
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin or the same user" });
};

module.exports = { getAllUsers, getUserById, updateUser };

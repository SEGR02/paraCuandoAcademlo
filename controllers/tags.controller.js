const TagsService = require("../services/tags.services");
const { getPagination, getPagingData } = require("../utils/helpers");

const tagsService = new TagsService();

const getAllTags = async (request, response, next) => {
  if (request.isAdmin || request.token) {
    try {
      let query = request.query;
      let { page, size } = query;

      const { limit, offset } = getPagination(page, size, "10");
      query.limit = limit;
      query.offset = offset;

      let tags = await tagsService.getAllTags();
      const results = getPagingData(tags, page, limit);
      return response.json({ results: tags });
    } catch (error) {
      next(error);
    }
  } else {
    response.status(401).json({ message: "Unauthorized option only for user" });
  }
};

const addTags = async (request, response, next) => {
  if (request.isAdmin == true) {
    try {
      const newTag = request.body;
      const tag = await tagsService.create(newTag);
      return response.json({ message: "Tag Added", results: tag });
    } catch (error) {
      next(error);
    }
  } else {
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin" });
  }
};

const getTagById = async (request, response, next) => {
  const { id } = request.params;
  if (request.token.id == id) {
    try {
      const tag = await tagsService.getTag(id);
      return response.json({ results: tag });
    } catch (error) {
      next(error);
    }
  } else
    response.status(401).json({ message: "Unauthorized option only for user" });
};

const editedTag = async (request, response, next) => {
  const { id } = request.params;
  if (request.isAdmin == true) {
    try {
      const { name, description, image_url } = request.body;
      const obj = {};
      obj.name = name;
      obj.description = description;
      obj.image_url = image_url;
      if (name == null && description == null && image_url == null) {
        return response.status(400).json({ message: "bad request" });
      }
      const tag = await tagsService.updateTag(id, obj);
      return response.json({ results: tag });
    } catch (error) {
      next(error);
    }
  } else
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin " });
};

const removeTag = async (request, response, next) => {
  const { id } = request.params;
  if (request.isAdmin == true) {
    try {
      const tagDeleted = await tagsService.delete(id);
      return response.json({ results: tagDeleted });
    } catch (error) {
      next(error);
    }
  } else
    response
      .status(401)
      .json({ message: "Unauthorized option only for admin " });
};

module.exports = {
  getAllTags,
  addTags,
  getTagById,
  editedTag,
  removeTag,
};

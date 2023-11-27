const Joi = require("joi");

const UserPayloadSchema = Joi.object({
  fullname: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).required(),
});

module.exports = UserPayloadSchema;

const { body } = require("express-validator");

const reviewsSchema = [
  body("space_id").notEmpty(),
  body("user_id").notEmpty(),
  body("stars").isNumeric(),
  body("review").isString().isLength({ max: 255 }),
];

module.exports = reviewsSchema;

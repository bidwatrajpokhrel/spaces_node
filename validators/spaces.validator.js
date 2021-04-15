const { body } = require("express-validator");

const spaceSchema = [
  body("name").isString().notEmpty().isLength({ max: 30, min: 4 }),
  body("address").isString().notEmpty().isLength({ max: 40 }),
  body("longitude").isNumeric().notEmpty(),
  body("latitude").isNumeric().notEmpty(),
  body("type").isIn(["penthouse", "banglow", "flat", "room"]),
  body("bedroom").isNumeric(),
  body("water_supply").isBoolean(),
  body("car_parking").isBoolean(),
  body("furnished").isBoolean(),
  body("description").isString().notEmpty().isLength({ max: 1000, min: 30 }),
];

module.exports = spaceSchema;

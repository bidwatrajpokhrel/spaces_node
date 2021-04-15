const { body } = require("express-validator");

const signUpSchema = [
  body("username").isString().notEmpty().isLength({ min: 5, max: 30 }),
  body("name").isString().notEmpty().isLength({ min: 3, max: 60 }),
  body("phone").isNumeric().notEmpty().isLength({ max: 10 }),
  body("email").isEmail(),
  body("password").isString().notEmpty().isLength({ max: 255, min: 8 }),
];

const signInSchema = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];

module.exports = { signUpSchema, signInSchema };

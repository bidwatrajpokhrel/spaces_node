const express = require("express");
const router = express.Router();
const methodNotAllowedErr = require("../middleware/errors/methodnotallowed.middleware");

const validator = require("../middleware/validation.middleware");
const { signUpSchema, signInSchema } = require("../validators/users.validator");

router.post("/signin", signInSchema, validator, (req, res, next) => {
  res.json({
    sentData: req.body,
  });
});

router.post("/signup", signUpSchema, validator, (req, res, next) => {
  res.json({
    sentData: req.body,
  });
});

router.get("/signin", methodNotAllowedErr);

router.get("/signup", methodNotAllowedErr);

module.exports = router;

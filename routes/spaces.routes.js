const express = require("express");

const router = express.Router();

const spaceSchema = require("../validators/spaces.validator");
const validator = require("../middleware/validation.middleware");

router.get("", (req, res, next) => {
  res.json({
    hit: "spaces all",
  });
});

router.get("/:id", (req, res, next) => {
  res.json({
    hit: `spaces individual with id ${req.params.id}`,
  });
});

router.post("", spaceSchema, validator, (req, res, next) => {
  res.json({
    hit: "post spaces",
    dataSent: req.body,
  });
});

router.put("/:id", spaceSchema, validator, (req, res, next) => {
  res.json({
    hit: `put spaces with id ${req.params.id}`,
    dataSent: req.body,
  });
});

router.delete("/:id", (req, res, next) => {
  res.json({
    hit: `delete individual with id ${req.params.id}`,
  });
});

module.exports = router;

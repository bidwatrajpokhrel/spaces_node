const express = require("express");

const router = express.Router();

router.get("/:space_id", (req, res, next) => {
  res.json({
    hit: `all review on space with id ${req.params.space_id}`,
  });
});

router.get("/:space_id/:id", (req, res, next) => {
  res.json({
    hit: `get review with id ${req.params.id} on space id ${req.params.space_id}`,
  });
});

router.post("/:space_id", (req, res, next) => {
  res.json({
    hit: `post review on space with id ${req.params.space_id}`,
    dataSent: req.body,
  });
});

router.put("/:id", (req, res, next) => {
  res.json({
    hit: `edit review with id ${req.params.id}`,
    dataSent: req.body,
  });
});

router.delete("/:id", (req, res, next) => {
  res.json({
    hit: `delete review with id ${req.params.id}`,
  });
});

module.exports = router;

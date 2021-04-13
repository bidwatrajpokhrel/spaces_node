const express = require("express");

const router = express.Router();

router.post("/signin", (req, res, next) => {
  res.json({
    sentData: req.body,
  });
});

router.post("/signup", (req, res, next) => {
  res.json({
    sentData: req.body,
  });
});

router.get("/signin", (req, res, next) => {
  next({
    statusCode: 405,
    message: "Method not Allowed",
  });
});

router.get("/signup", (req, res, next) => {
  next({
    statusCode: 405,
    message: "Method not Allowed",
  });
});

module.exports = router;

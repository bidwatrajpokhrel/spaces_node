module.exports = function (req, res, next) {
  res.status(404).json({
    statusCode: 405,
    message: "Method not Allowed",
  });
};

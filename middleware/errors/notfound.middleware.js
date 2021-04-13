module.exports = function (req, res, next) {
  res.status(404).json({
    statusCode: 404,
    message: "URL does not exist",
  });
};

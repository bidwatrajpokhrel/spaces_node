module.exports = function (err, req, res, next) {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
  });
};

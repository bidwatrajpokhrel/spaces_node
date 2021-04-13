//imports
const express = require("express");
const app = express();
const PORT = require("./configs/config").PORT;

const routes = require("./routes");
const errorHandler = require("./middleware/errors/errors.middleware");
const notFoundError = require("./middleware/errors/notfound.middleware");

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler, notFoundError);

app.listen(PORT, () => {
  console.log(`Server Listening to port ${PORT}`);
});

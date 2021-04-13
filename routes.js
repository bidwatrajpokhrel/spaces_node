const express = require("express");
const router = express.Router();

const authRouter = require("./routes/auth.routes");
const spacesRouter = require("./routes/spaces.routes");
const reviewsRouter = require("./routes/reviews.routes");

router.use("/auth", authRouter);
router.use("/spaces", spacesRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;

const express = require("express");
const router = express.Router();

const authorRoute = require("./author");
const bookRoute = require("./book");
const categoryRoute = require("./category");
const publisherRoute = require("./publisher");
const quoteRoute = require("./quote");
const userRoute = require("./users");
const authRoute = require("./auth");

router.use("/authors", authorRoute);
router.use("/books", bookRoute);
router.use("/categories", categoryRoute);
router.use("/publishers", publisherRoute);
router.use("/quotes", quoteRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

module.exports = router;
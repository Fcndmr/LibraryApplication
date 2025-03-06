const express = require("express");
const router = express.Router();

const authorRoute = require("./author");
const bookRoute = require("./book");
const categoryRoute = require("./category");
const publisherRoute = require("./publisher");
const quoteRoute = require("./quote");

router.use("/author", authorRoute);
router.use("/book", bookRoute);
router.use("/category", categoryRoute);
router.use("/publisher", publisherRoute);
router.use("/quote", quoteRoute);

module.exports = router;
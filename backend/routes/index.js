const express = require("express");
const router = express.Router();

const authorRoute = require("./author");
const bookRoute = require("./book");
const categoryRoute = require("./category");
const publisherRoute = require("./publisher");
const quoteRoute = require("./quote");

router.use("/authors", authorRoute);
router.use("/books", bookRoute);
router.use("/categories", categoryRoute);
router.use("/publishers", publisherRoute);
router.use("/quotes", quoteRoute);

module.exports = router;
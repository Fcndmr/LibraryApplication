const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

router.post("/", async (req, res) => {
    try {
        const quote = new Quote(req.body);
        await quote.save();
        res.status(201).json(quote);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/", async (req, res) => {
    try {
        const quotes = await Quote.find()
            .populate("author", "name")
            .populate("book", "title");
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:quoteID", async (req, res) => {
    try {
        const quoteID = req.params.quoteID;
        const quote = await Quote.findById(quoteID);
        if (!quote) {
            res.status(404).json({error : "Alıntı bulunamadı..."});
        }
        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.put("/:quoteID", async (req, res) => {
    try {
        const quoteID = req.params.quoteID;
        const updatedInfo = req.body;
        const updatedQuote = await Quote.findByIdAndUpdate(quoteID, updatedInfo, {new: true, runValidators: true});
        if (!updatedQuote) {
            res.status(404).json({error : "Alıntı bulunamadı..."});
        }
        res.status(200).json(updatedQuote);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:quoteID", async (req, res) => {
    try {
        const quoteID = req.params.quoteID;
        const deletedQuote = await Quote.findByIdAndDelete(quoteID);
        if (!deletedQuote) {
            res.status(404).json({error : "Alıntı bulunamadı..."});
        }
        res.status(200).json(deletedQuote);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
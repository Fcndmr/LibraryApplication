const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

router.post("/", async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/", async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:authorId", async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const author = await Author.findById(authorId);
        if (!author) {
            res.status(404).json({error : "Yazar bulunamadı..."});
        }
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});


router.put("/:authorId", async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const updatedInfo = req.body;
        const updatedAuthor = await Author.findByIdAndUpdate(authorId, updatedInfo, {new: true, runValidators: true});
        if (!updatedAuthor) {
            res.status(404).json({error : "Yazar bulunamadı..."});
        }
        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:authorId", async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const deletedAuthor = await Author.findByIdAndDelete(authorId);
        if (!deletedAuthor) {
            res.status(404).json({error : "Yazar bulunamadı..."});
        }
        res.status(200).json(deletedAuthor);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
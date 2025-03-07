const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post("/", async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:bookId", async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        if (!book) {
            res.status(404).json({error : "Kitap bulunamadı..."});
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.post("/:bookId", async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const updatedInfo = req.body;
        const updatedBook = await Book.findByIdAndUpdate(bookId, updatedInfo, {new: true, runValidators: true});
        if (!updatedBook) {
            res.status(404).json({error : "Kitap bulunamadı..."});
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:bookId", async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if (!deletedBook) {
            res.status(404).json({error : "Kitap bulunamadı..."});
        }
        res.status(200).json(deletedBook);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
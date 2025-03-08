const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({error : "Kategori bulunamadı..."});
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.put("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const updatedInfo = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updatedInfo, {new: true, runValidators: true});
        if (!updatedCategory) {
            res.status(404).json({error : "Kategori bulunamadı..."});
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            res.status(404).json({error : "Kategori bulunamadı..."});
        }
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
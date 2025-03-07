const express = require("express");
const router = express.Router();
const Publisher = require("../models/Publisher");

router.post("/", async (req, res) => {
    try {
        const publisher = new Publisher(req.body);
        await publisher.save();
        res.status(201).json(publisher);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/", async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.status(200).json(publishers);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:publisherId", async (req, res) => {
    try {
        const publisherId = req.params.publisherId;
        const publisher = await Publisher.findById(publisherId);
        if (!publisher) {
            res.status(404).json({error : "Yayınevi bulunamadı..."});
        }
        res.status(200).json(publisher);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.post("/:publisherId", async (req, res) => {
    try {
        const publisherId = req.params.publisherId;
        const updatedInfo = req.body;
        const updatedPublisher = await Publisher.findByIdAndUpdate(publisherId, updatedInfo, {new: true, runValidators: true});
        if (!updatedPublisher) {
            res.status(404).json({error : "Yayınevi bulunamadı..."});
        }
        res.status(200).json(updatedPublisher);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:publisherId", async (req, res) => {
    try {
        const publisherId = req.params.publisherId;
        const deletedPublisher = await Publisher.findByIdAndDelete(publisherId);
        if (!deletedPublisher) {
            res.status(404).json({error : "Yayınevi bulunamadı..."});
        }
        res.status(200).json(deletedPublisher);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
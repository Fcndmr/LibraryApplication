const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.delete("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.put("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const {password, ...updateData } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı..." });
        }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }  
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
            runValidators: true
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
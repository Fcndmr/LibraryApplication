const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const checkUser = await User.findOne({email});
        if (checkUser) {
            return res.status(400).json({error : "Bu email adresi kullanılmaktadır..."});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({
            username,
            email,
            password : hashPassword
        });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({error : "Geçersiz email adresi..."});
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({error : "Geçersiz şifre..."});
        }
        res.status(200).json({
            id : user._id,
            email : user.email,
            username : user.username,
            role : user.role
        });
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

module.exports = router;
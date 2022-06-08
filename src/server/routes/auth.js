const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.schema");

// POST
router.post("/registerUser", async (req, res) => {
    const newUser = new UserModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const userToSave = await newUser.save();
        res.status(200).json(userToSave)
    } catch (err) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.get("/getAll", async (req, res) => {
    try {
        const usersList = await UserModel.find();
        res.json(usersList)
    } catch (err) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.get("/getOne/:id", async (req, res) => {
    try {
        const findUser = await UserModel.findById(req.params.id);
        res.json(findUser)
    } catch (err) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post("/register", async (req, res, next) => {
    await UserModel.create({
        username: req.body.username,
        password: req.body.password,
    });
    const user = await UserModel.find();
    res.json(user).status(200);
});

router.post("/login", async (req, res, next) => {
    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    });
    if (user) {
        const token = jwt.sign({
            ...user
        }, "secretToken", {
            expiresIn: "24h"
        });

        const decoded = jwt.verify(token, "secretToken");

        console.log(decoded);
        res.status(201).json({
            user,
            token: token,
            exp: decoded.exp
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

module.exports = router;
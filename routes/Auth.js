require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
const { isValidEmail, isValidName, isValidPassword } = require("../utility/validate");
const User = require('../models/User');

router.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const avatar = req.file;

        // Validate Data
        const errors = [];
        if (!isValidName(fullName)) errors.push("Invalid name");
        if (!isValidEmail(email)) errors.push("Invalid email");
        if (!isValidPassword(password)) errors.push("Invalid password, make sure it is 8 characters long");
        if (!avatar) errors.push("Please choose a profile picture");

        if (errors.length > 0) {
            res.status(400).send({ status: "failed", error: errors.join(", ") });
            return;
        }

        //compress image



        //check if already registered
        const oldUser = await User.findOne({ email });
        console.log("Old user===>", oldUser);
        if (oldUser) {
            return res.status(409).send({ status: "failed", error: "User Already Exist. Please Login." });
        }

        //Encrypt user password
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                console.log("Password encrypted====>", hash);
                // Create user in our database
                const user = new User({
                    fullName,
                    email: email.toLowerCase(), // sanitize: convert email to lowercase
                    password: hash,
                });

                console.log("User created==>", user);

                user.save((err) => {
                    if (err) throw err;
                    res.status(200).send({ status: "success", message: "Successfully registered user: " + email });
                });
            });
        });


    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});

router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        // Validate user input
        const errors = [];
        if (!isValidEmail(email)) errors.push("Invalid email");
        if (!isValidPassword(password)) errors.push("Invalid password, make sure it is 8 characters long");

        if (errors.length > 0) {
            res.status(400).send({ status: "failed", error: errors.join(", ") });
            return;
        }

        const user = await User.findOne({ email });

        if (user) {
            bcrypt.compare(password, user.password, (err, data) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log("Compare Data====>", data);
                    if (data) {
                        const token = jwt.sign(
                            { user_id: user._id, email },
                            process.env.TOKEN_KEY,
                            { expiresIn: "2h" }
                        );

                        console.log("JWT Generated===>", token);

                        res.status(200).json({ status: "success", data: { email: user.email, name: user.fullName, token: token } });
                    }
                    else {
                        res.status(400).send({ status: "failed", error: "Wrong password" });
                    }
                }

            });
        }
        else {
            res.status(400).send({ status: "failed", error: "User not registered" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;

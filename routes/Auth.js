require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
const sharp = require("sharp");
const fs = require('fs');
const path = require('path');
const { isValidEmail, isValidName, isValidPassword } = require("../utility/validate");
const User = require('../models/User');
const Encryptor = require('../utility/crypto');
const enc = new Encryptor("9y$B&E)H+MbQeThWmZq4t7w!z%C*F-Ja");

router.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        console.log("Signup body: ", req.body);
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

        //check if already registered
        const oldUser = await User.findOne({ email });
        console.log("Old user===>", oldUser);
        if (oldUser) {
            return res.status(409).send({ status: "failed", error: "User Already Exist. Please Login." });
        }

        //compress image req.file
        const avatarsDir = 'avatars';
        if (!fs.existsSync(avatarsDir)) {
            fs.mkdirSync(avatarsDir);
        }
        const avatarLocation = path.join("avatars", email + "-" + Date.now() + ".webp");
        try {
            const compAvatar = await sharp(req.file.buffer).resize(200, 200).toBuffer();
            fs.writeFileSync(path.join(process.cwd(), avatarLocation), compAvatar);
        }
        catch (e) {
            console.log("=============ERROR==============");
            console.log(e);
            console.log("=============ERROR==============");
            res.status(500).end();
            return;
        }

        //Encrypt user password
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                console.log("Password encrypted====>", hash);
                // Create user in our database
                const user = new User({
                    name: fullName,
                    email: email.toLowerCase(), // sanitize: convert email to lowercase
                    password: hash,
                    avatar: avatarLocation
                });

                console.log("User created==>", user);

                user.save((err) => {
                    if (err) throw err;
                    let { accessToken, refreshToken } = generateLoginJwt(false, { email: user.email, name: user.name, avatar: user.avatar });
                    refreshToken = enc.encrypt(refreshToken);
                    res.cookie('_refresh', refreshToken, { maxAge: 10 * 24 * 60 * 60, httpOnly: true });
                    res.status(200).send({ status: "success", message: "Successfully registered user: " + email, data: { accessToken } });
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
        console.log("User:",user);
        if (user) {
            bcrypt.compare(password, user.password, (err, data) => {
                if (err) {
                    throw err;
                }
                else {
                    if (data) {
                        let { accessToken, refreshToken } = generateLoginJwt(false, { email, name: user.name, avatar: user.avatar });
                        refreshToken = enc.encrypt(refreshToken);
                        res.cookie('_refresh', refreshToken, { maxAge: 10 * 24 * 60 * 60, httpOnly: true });
                        res.status(200).json({ status: "success", data: { accessToken } });
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

router.post("/reauth", (req, res) => {
    let refreshToken = req.cookies._refresh;
    if (refreshToken) refreshToken = enc.dencrypt(refreshToken);
    // Verify JWT Token
    jwt.verify(refreshToken, process.env.JWT_KEY, (err, verifiedJwt) => {
        if (err) {
            res.send({ status: "falied", error: "Invalid credentials" })
        } else {
            // console.log(verifiedJwt.email);
            if (verifiedJwt.email) {
                let { accessToken } = generateLoginJwt(true, verifiedJwt);
                res.status(200).json({ status: "success", data: { accessToken } });
            }
        }
    })
});

router.get('/logout',(req,res)=>{
    res.cookie('_refresh', "", { maxAge: 0, httpOnly: true });
    res.end();
});

function generateLoginJwt(isRefreshRoute, { email, name, avatar }) {
    console.log("Name:",name);
    const accessToken = jwt.sign(
        { email, name, avatar },
        process.env.JWT_KEY,
        { expiresIn: "3h" }
    );
    if (!isRefreshRoute) {
        let refreshToken = jwt.sign(
            { email, name, avatar },
            process.env.JWT_KEY,
            { expiresIn: "10d" }
        );
        return { accessToken, refreshToken }
    }
    return { accessToken };
}

module.exports = router;

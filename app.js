require("dotenv").config();
require('./configs/database').connect();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT;
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authRoute = require('./routes/Auth');
const questionRoute = require('./routes/Question');
//static serve
app.use(express.static(path.join(__dirname, "build")));
app.use("/avatars", express.static(__dirname + '/avatars'));
//Auth route
app.use('/auth', authRoute);
//Question route
app.use('/api/question', questionRoute);

app.listen(PORT, () => {
    console.log("\n<================================>");
    console.log(`AkSepya server listening on port ${PORT}`);
    console.log("<================================>\n");
});

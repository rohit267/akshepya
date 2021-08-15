require("dotenv").config();
require('./configs/database').connect();
const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoute = require('./routes/Auth');

//static serve
app.use(express.static(path.join(__dirname, "build", "index.html")));
//Auth route
app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log("\n<================================>");
    console.log(`AkSepya listening on port ${PORT}`);
    console.log("<================================>\n");
});

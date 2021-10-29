const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuth = (req, res, next) => {
  // console.log("Headers", req.headers);
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    //verify jwt token using process.env.JWT_KEY
    jwt.verify(bearerToken, process.env.JWT_KEY, (err, authData) => {
      if (err) {
        // console.log(err);
        res.status(403).json({
          message: "Forbidden"
        });
      } else {
        req.user = authData;
        next();
      }
    });
  } else {
    res.status(403).send("You are not authenticated");
  }
};

module.exports = isAuth;


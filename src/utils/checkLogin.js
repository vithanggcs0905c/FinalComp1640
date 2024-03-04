const jwt = require("jsonwebtoken");
const { env } = require("./environment");

function checkLogin(req, res, next) {
  var cookies = req.cookies["access_token"];

  if (!cookies) {
    res.redirect("/login");
  }

  var decoded = jwt.verify(cookies, env.jwt);
  res.user = decoded;

  next();
}

module.exports = checkLogin;

const { env } = require("../config/environment");
const covertData = require("../utils/coverData");
const nodemailer = require("nodemailer");
const Users = require("../models/Users");
const { google } = require("googleapis");
const { GoogleAuth } = require("google-auth-library");
const { myOAuth2Client } = require("../config/email");
const Articles = require("../models/Articles");
const Facultis = require("../models/Facultis");
const multer = require("multer");
const path = require("path");

class ArticlesController {
  index(req, res, next) {
    var users = res.user;
    res.render("test");
  }

  // CRUD---articles

  async articlesC(req, res, next) {
    console.log("da vao");
    var file = req.files[0].path;
    var image = req.files[1].path;

    var { facultyId } = req.params;
    var { articlesName, description, StatusId } = req.body;
  }
}

module.exports = new ArticlesController();

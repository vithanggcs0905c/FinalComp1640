const express = require("express");
const router = express.Router();
const ArticlesController = require("../controllers/ArticlesController");
const document_img = require("../utils/multerDoc_img");
const upload = require("../utils/multerImg");

router.post(
  "/articlesC/:facultyId/:academicYearsId/:userId",
  document_img,
  ArticlesController.articlesC
);
router.get("/", ArticlesController.index);

module.exports = router;

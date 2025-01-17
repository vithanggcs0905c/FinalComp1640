const jwt = require("jsonwebtoken");
const { env } = require("../config/environment");
const Users = require("../models/Users");
const coverData = require("../utils/coverData");
const Role = require("../models/Role");
const AcademicYears = require("../models/AcademicYears");
const CloseDates = require("../models/CloseDates");

class AdminController {
  async index(req, res, next) {
    try {
      const ad = res.user;
      const dataClose = await CloseDates.find({});
      const data = await Users.find({}).populate("role").populate("facultis");
      const role = await Role.find({});
      return res.status(200).render("admin", {
        user: true,
        admin: true,
        name: ad.name,
        data: coverData(data),
        nameRole: coverData(role),
        img: ad.img,
        dataClose: coverData(dataClose),
      });
    } catch (err) {
      return res.send("404 Not Found");
    }
  }
  update(req, res, next) {
    const id = req.params._id;
    const { role, faculty } = req.body;
    var obj = {};
    if (role) {
      obj.role = role;
    }
    if (faculty) {
      obj.faculty = faculty;
    }

    Users.findOneAndUpdate({ _id: id }, obj)
      .then(() => {
        res.status(200).send("Done");
      })
      .catch((err) => {
        return res.status(404).send("Error");
      });
  }
  academic(req, res, next) {
    const { academicYears } = req.body;
    try {
      const academicyears = new AcademicYears({ AcademicYears: academicYears });
      academicyears.save();
      res.status(200).send(done);
    } catch (err) {
      return res.status(500).send("Error");
    }
  }
  deleteAcademic(req, res, next) {
    academicId = req.params;
    AcademicYears.deleteOne({ _id: ademicId })
      .then(() => {
        res.status(200).send("Success");
      })
      .catch((err) => res.status(500).send("Error"));
  }
  closeDate(req, res, next) {
    const academicId = req.params._id;
    const facultyId = req.params._id;
    const { closeDates, finalCloseDates } = req.body;
    try {
      const closeDates = new CloseDates({
        closeDates: closeDates,
        finalCloseDates: finalCloseDates,
        academic: academicId,
        faculty: facultyId,
      });
    } catch (err) {
      return res.status(500).send("Error");
    }
  }
  deleteCloseDates(req, res, next) {
    const closeDateId = req.params;
    AcademicYears.deleteOne({ _id: closeDateId })
      .then(() => {
        res.status(200).send("Success");
      })
      .catch((err) => res.status(500).send("Error"));
  }
}

module.exports = new AdminController();

const Course = require("../models/Course");
const {multipleMongooseToObject} = require ('../../utils/mongoose');

class SiteController {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses)});
      })
      .catch((error) => next(error));
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

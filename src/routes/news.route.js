const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController'); // is an object

// Route doc tu tren xuong duoi, nen phai de index xuong duoi cung
router.use('/:slug', newsController.show)

/************************************ */
//   app.get(
//     "/news", // dinh nghia route
//     (req, res) => {
//       res.render("news"); // take contents in file account.handlebars to put into body of main_layout
//     }
//   );
// Tuong duong code o tren
router.use('/', newsController.index);
/************************************ */

module.exports = router;
const express = require("express"); //nap library
const morgan = require("morgan");
const route = require('./routes'); //tu dong tim file index trong folder nay
const hbs = require("express-handlebars");

const app = express(); // day la mot function. Tra ve mot object app.
const port = 3000;

// Static files
app.use(express.static('./src/public'));

// HTTP logger
app.use(morgan("combined")); // dung de debug, hien Request tren server len terminal

// Template engine:
app.engine("hbs", hbs.engine({
  extname: '.hbs' // change extention name of handlebars to .hbs
}));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// Cac files khong can controller rieng biet, ta gop chung voi nhau, vi du: Home, Search, Contact


// Route init
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => console.log(`Example app listening on port ${port}`)); // app lang nghe cong 3000

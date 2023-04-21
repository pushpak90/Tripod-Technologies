const { request, response, Router } = require("express");
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Vision = require("./models/Vision");
const Spage = require("../views");


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.use("", routes);

// template engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//db connections
mongoose.connect("mongodb://localhost/staffing", () => {
  console.log("db connected");
  //   Detail.create({
  //     brandName: "US Staffing",
  //     bandIconUrl: "/static/images/logo.png",
  //     links: [
  //       {
  //         label: "Home",
  //         url: "/",
  //       },
  //       {
  //         label: "Services",
  //         url: "/services",
  //       },
  //       {
  //         label: "About",
  //         url: "/about",
  //       },
  //       {
  //         label: "Contact-Us",
  //         url: "/contact-us",
  //       },
  //     ],
  //   });

  //   Slider.create([
  //     {
  //       title: "Learn java in very easy manner",
  //       subTitile: "java is one of the most popular prog laung",
  //       imageUrl: "/static/images/s1.jpg",
  //     },
  //     {
  //       title: "Learn java in very easy manner2222",
  //       subTitile: "java is one of the most popular prog laung2222",
  //       imageUrl: "/static/images/s2.jpg",
  //     },
  //     {
  //       title: "Learn java in very easy manner3333",
  //       subTitile: "java is one of the most popular prog laung3333",
  //       imageUrl: "/static/images/s3.jpg",
  //     },
  //   ]);
  //   Vision.create({
  //     visionH: " ",
  //     vision: " ",
  //     missionH: " ",
  //     mission: " ",
  //     vandm: " ",
  //   });
});

mongoose.con;

app.listen(process.env.PORT | 5555, () => {
  console.log("Server Started");
});

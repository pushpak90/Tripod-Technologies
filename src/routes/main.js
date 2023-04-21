const { request, response } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const routes = express.Router();
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Vision = require("../models/Vision");
const Contact = require("../models/Contact")

routes.get("/", async (request, response) => {
  const details = await Detail.findOne({ _id: "64252d678027ee12b5ee93a7" });
  const slides = await Slider.find();
  const vision = await Vision.findOne();
  //console.log(slides)
  //console.log(details)
  response.render("index", {
    details: details,
    slides: slides,
    vision: vision,
  });
  //console.log(vision)
});

routes.get("/services", async (request, response) => {
  const details = await Detail.findOne({ _id: "64252d678027ee12b5ee93a7" });
  //console.log(details)
  response.render("services", {
    details: details,
  });
});

routes.get("/about", async (request, response) => {
  const details = await Detail.findOne({ _id: "64252d678027ee12b5ee93a7" });
  response.render("about", {
    details: details,
  });
});

routes.get("/contact-us", async (request, response) => {
  const details = await Detail.findOne({ _id: "64252d678027ee12b5ee93a7" });
  response.render("contact-us", {
    details: details,
  });
});

routes.post("/process-contact-form",async(request,response) => {
  console.log("This from is submitted")
  console.log(request.body)
  // save the data to db
  try{
    const data = await Contact.create(request.body)
    console.log(data)
    response.redirect("/contact-us")
  }catch(e){
    console.log(e)
    response.redirect("/contact-us");
  }
})


module.exports = routes;

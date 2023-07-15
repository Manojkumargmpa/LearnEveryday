//jshint esversion:6


const express=require("express");
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

const factSchema = new mongoose.Schema({
  id: Number,
  text: String,
  source: String,
  category: String,
  votesInteresting: Number,
  votesMindblowing: Number,
  votesFalse: Number,
  createdIn: Number,
});
const FactModel = mongoose.model('Fact', factSchema);


app.get("/", async (req, res) => {
    const obj = new FactModel({
      text: "sdfdlf dfdfd",
    });
  
    try {
      await obj.save();
      res.send("Fact saved successfully");
    } catch (error) {
      console.error('Error saving fact:', error);
      res.status(500).send("Error saving fact");
    }
  });
  

app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
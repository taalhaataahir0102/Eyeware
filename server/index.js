const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { spawn } = require('child_process');
const fetch = require('node-fetch');
const cv = require('opencv4nodejs');

const app = express();

app.use(cors());
app.use(express.json());  

const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


// const testSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

const faqSchema = new mongoose.Schema({
  question: { type: String},
  answer: { type: String},
});
const Faq = mongoose.model('Faq', faqSchema);

app.get('/faq', async (req, res) => {
  try {
    const users = await Faq.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



const reviewSchema = new mongoose.Schema({
  name: { type: String},
  review: { type: String},
});
const Review = mongoose.model('Review', reviewSchema);

app.get('/review', async (req, res) => {
  try {
    const users = await Review.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  console.log(a,b);
  result = a+b;
  res.send({result});
});


  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

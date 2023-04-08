const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { spawn } = require('child_process');


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




app.get('/add', (req, res) => {
  // Get the query parameters from the request
  const num1 = parseInt(3);
  const num2 = parseInt(4);

  // Spawn a child process that runs the Python script and passes in the arguments
  const pythonProcess = spawn('python3', ['mymodule.py', num1, num2]);

  // Listen for data from the Python process
  pythonProcess.stdout.on('data', (data) => {
    const result = data.toString().trim();
    console.log(`Result from Python: ${result}`);
    res.send(`The sum of ${num1} and ${num2} is ${result}`);
  });

  // Listen for errors from the Python process
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error from Python: ${data}`);
    res.status(500).send('An error occurred while running the Python script.');
  });

  // Listen for the Python process to exit
  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
  });

  // Listen for errors from the Python process
  pythonProcess.on('error', (err) => {
    console.error(`Error executing Python script: ${err}`);
    res.status(500).send('An error occurred while running the Python script.');
  });
});



  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

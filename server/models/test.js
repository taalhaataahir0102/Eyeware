const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first: { type: String},
  second: { type: String},
},);

const test = mongoose.model('test', userSchema);

module.exports = test;

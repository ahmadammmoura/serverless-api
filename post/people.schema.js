'use strict';
const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
  },
  age: Number,
  job: String,
});

module.exports = dynamoose.model('people', peopleSchema);
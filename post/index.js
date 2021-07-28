'use strict';
const uuid = require('uuid').v4;
const model = require('./people.schema');

exports.handler = async (event) => {
  try {
    const { name, age, job } = JSON.parse(event.body);
    const id = uuid();
    const person = new model({ id, name, age, job });
    const data = await person.save();
    return {
      status: 201,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
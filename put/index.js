'use strict';
const model = require('./people.schema');

exports.handler = async (event) => {
  try {
    const { name, age, job } = JSON.parse(event.body);
    const id = event?.pathParameters?.id;
    const data = await model.update(
      { 'id': id },
      { 'name': name, 'age': age, 'job': job }
    );
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
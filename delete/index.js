'use strict';
const model = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    await model.delete(id);
    return {
      status: 200,
      body: {},
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

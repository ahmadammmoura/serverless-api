'use strict';
const model = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      const people = await model.query('id').eq(id).exec();
      data = people[0];
    } else {
      data = await model.scan().exec();
    }
    return {
      status: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
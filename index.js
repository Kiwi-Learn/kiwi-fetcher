'use strict';
const got = require('got');
let apiURL = 'kiwi-api.herokuapp.com/api/v1/fetch';

got.put(apiURL, (error, body, response) => {
  if (error) throw error;
  console.log(body);
});

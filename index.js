'use strict';
const got = require('got');
let apiURL = 'kiwi-api.herokuapp.com/api/v1/fetch/courselist';

got.put(apiURL).then(response => {
  console.log(response.body);
}).catch(error => {
  if (error) throw error;
});

'use strict';
const got = require('got');
let apiURLCourselist = 'kiwi-api.herokuapp.com/api/v1/fetch/courselist';
let apiURLCourseserial = 'kiwi-api.herokuapp.com/api/v1/fetch/courseserials';

got.put(apiURLCourselist).then(response => {
  console.log(`Courselist: ${response.body}`);
}).catch(error => {
  if (error) throw error;
});

got.put(apiURLCourseserial).then(response => {
  console.log(`Courseserial: ${response.body}`);
}).catch(error => {
  if (error) throw error;
});

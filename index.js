'use strict';
const got = require('got');
const _ = require('lodash');
let options = {json: true};
let apiURL = 'kiwi-api.herokuapp.com/api/v1/fetch';

function weightVisitCount(n) {
  n === null ? n = 0 : n = n;
  return parseInt(n) * 0.2;
}

function weightReserveCount(n) {
  n === null ? n = 0 : n = n;
  return parseInt(n) * 0.8;
}

// got.put(apiURL, (error, body, response) => {
//   if (error) throw error;
//   console.log(body);
// });

for (let i = 0; i < 5; i++) {
  let scApi = `www.sharecourse.net/sharecourse/api/android/getAllCourseInfo/${i}`;
  got(scApi, options)
    .then(response => {
      let body = response.body;
      let identNumbers = _.pluck(body, 'ident_number');
      let visitCounts = _.pluck(body, 'visitCount');
      let reserveCounts = _.pluck(body, 'reserveCount');
      let sortable = [];

      let visitHotScore = _.map(visitCounts, weightVisitCount);
      let reserveHotScore = _.map(reserveCounts, weightReserveCount);
      let totalScore = new Array(visitHotScore.length).fill(0);

      for (let i = 0; i < visitHotScore.length; i++) {
        totalScore[i] = visitHotScore[i] + reserveHotScore[i];
      }

      let a = _.zipObject(identNumbers, totalScore);
      console.log(a);

    }).catch(error => {
      console.log(error);
    });

}

console.log("Starting app");
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Will'));

var filteredArray = _.uniq(['Will', 1, 'Will', 1, 2, 3, 4]);
console.log(filteredArray);
var res = notes.addNote();
console.log(res);

console.log('Result: ', notes.add(9, -2));
// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`, function(err) {
//   if (err) {
//     console.log("Unable to write to file.");
//   }
//   else {
//     console.log("File write accepted.");
//   }
// });
// 

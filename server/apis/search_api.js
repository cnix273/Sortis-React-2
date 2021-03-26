const User       = require('../models/User');
const passport = require("passport");
const API = require('../service/hubspot_constructor');
// const request = require('request');

// login
exports.contactSearch = (req, res) => {


  const apiParam = JSON.stringify(req.body.searchName); 
  console.log(apiParam);

  const showMe = API(apiParam);

  request(showMe, function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const investor = [];
    // console.log(body.results);
   
    for (var i = 0; i<body.results.length; i++) {
      investor.push(body.results[i].properties) 
    }

});
}

// // register a user
// exports.contactSearch = (req, res) => {
  
//   User.findOne({ 'username' :  req.body.username }, function(err, user) {

//     // check to see if theres already a user with that email
//     if (user) {
//         res.send({ duplicateUser: true })
//     } else {

//         // if there is no user with that email
//         // create the user
//         console.log("new user", req.body);
//         const newUser       = new User();

//         // set the user's local credentials
//         newUser.username    = req.body.username;
//         newUser.email       = req.body.email;
//         newUser.password    = newUser.generateHash(req.body.password);

//         // save the user
//         newUser.save()
//           .then(function() {
//           res.send({ success: true });
//         }).catch(function(err) {
//           res.json(err);
//         });
//     }

//   }); 
// };
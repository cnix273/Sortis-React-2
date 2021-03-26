const API = require('../service/hubspot_constructor');
const request = require('request');

// login
exports.contactSearch = (req, res) => {

  const apiParam = JSON.stringify(req.body.searchName); 
  console.log(apiParam);

  const showMe = API(apiParam);

  request(showMe, function(error, response, body) {

    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const investor = [];
    
    for (var i = 0; i<body.results.length; i++) {
      investor.push(body.results[i].properties) 
    }

    console.log(investor)

  });

}
const apiSetup = require('../service/hubspot_tools');
const axios = require('axios');

// search Contacts route
exports.contactSearch = (req, res) => {

  let pageLimit = 0;
  let investor = [];
  const queryParam = JSON.stringify(req.body.searchName); 
  const queryInit = apiSetup.objBuild(queryParam, pageLimit);

  axios(queryInit).then((apiRes) => {
    
    // adds all of the "first" result objects
    investor = apiSetup.saveResData(investor, apiRes);

    let numPages = Math.trunc(apiRes.data.total/100); 

    // initial check if there are additional results
    if (numPages !== 0) {

      for (let i=0; i < numPages; numPages--) {

        pageLimit = pageLimit + 100;
        const queryNext = apiSetup.objBuild(queryParam, pageLimit);

        axios(queryNext).then((apiRes) => {
          investor = apiSetup.saveResData(investor, apiRes);

          console.log(`The Hubspot API returned `, investor.length, ` results :), congrats!`)
          
          // THIS IS WHERE YOU NEED TO SEND THE INVESTOR data BACK to the Client Side
          // We Probably need to insert a res.json(investor) or res.send(investor) here
          
          res.json(investor);

        })
      }
    } else {
      // else will run if # of results returned is less than 100

        // THIS IS WHERE YOU NEED TO SEND THE INVESTOR data BACK to the Client Side
        // We Probably need to insert a res.json(investor) or res.send(investor) here

        res.json(investor);

      console.log(`The Hubspot API returned `, investor.length, ` results :), congrats!`)
  
    }
  })
  .catch((error) => {
    console.log(error);
  })
}
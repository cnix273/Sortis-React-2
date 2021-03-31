
const axios = require('axios');
const buildNewMember = require('../service/mailchimp_tools');

exports.sendNewMember = (req, res) => {

  const mailConstructor = buildNewMember(req.body);

  axios(mailConstructor)
  .then((response) => {
    console.log(JSON.stringify(response.data));

    console.log(`Sucessfully added to Mailchimp Mailing Lust`, response.data, `  congrats!`)
  })
  .catch((error) => {
    console.log(error);
  })
}
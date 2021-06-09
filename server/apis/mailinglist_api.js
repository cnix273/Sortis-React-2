const axios = require('axios');
const buildNewMember = require('../service/mailchimp_tools');

exports.sendNewMember = (req, res) => {

  const mailConstructor = buildNewMember(req.body);

  console.log(mailConstructor);

  axios(mailConstructor)
  .then((response) => {
    console.log(`Sucessfully added to Mailchimp Mailing List`, response.data, `  congrats!`)

    res.status(200).send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).end();
  })
}
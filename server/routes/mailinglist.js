const express = require('express');
const router  = express.Router();

const mailinglist_api = require('../apis/mailinglist_api');

router.post('/newinvestor', mailinglist_api.sendNewMember);

module.exports = router;
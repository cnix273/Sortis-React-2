const express = require('express');
const router  = express.Router();

const mailinglist_api = require('../apis/mailinglist_api');
const authCheck = require("../config/middleware/authCheck");

router.post('/newinvestor', authCheck, mailinglist_api.sendNewMember);

module.exports = router;
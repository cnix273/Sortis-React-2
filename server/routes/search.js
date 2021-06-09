const express = require('express');
const router  = express.Router();

const search_api = require('../apis/search_api');
const authCheck = require("../config/middleware/authCheck");

router.post('/search', authCheck, search_api.contactSearch);

module.exports = router;
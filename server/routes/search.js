const express = require('express');
const router  = express.Router();

const search_api = require('../apis/search_api');

router.post('/search', search_api.contactSearch);

module.exports = router;
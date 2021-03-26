const express = require('express');
const router  = express.Router();

const search_api = require('../apis/search_api');

router.get('/search', search_api.contactSearch);

// router.post('/login', users_api.loginUser);

// router.post('/signup', users_api.signUpUser);

module.exports = router;
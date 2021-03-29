const express = require('express');
const router = express.Router();

//@route api/users
//test route
//public
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;
const express = require('express');
const router = express.Router();

//@route api/auth
//test route
//public
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;
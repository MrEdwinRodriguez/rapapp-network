const express = require('express');
const router = express.Router();

//@route api/recordings
//test route
//public
router.get('/', (req, res) => res.send('Recordings Route'));

module.exports = router;
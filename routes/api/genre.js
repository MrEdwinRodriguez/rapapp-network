const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Genre = require('../../models/Genre');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');

//@route POST api/genre
//create genre
//public
router.post('/',[
    check('name', 'name is required').not().isEmpty(),
    check('abbr', 'Abbreviation is required').not().isEmpty(),
    ], async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    let { name, abbr } = req.body;
    try { 
        let genre = await Genre.findOne({ $or: [ { "name": req.body.name }, { "abbr": req.body.abbr } ] } );
        if (genre && genre.name == name) {
            return res.status(400).json({ errors: [{ msg: 'Genre name is taken'}]});
        } else if (genre && genre.abbr == abbr) {
            return res.status(400).json({ errors: [{ msg: 'Abbreviation is taken'}]});
        }
        genre = new Genre ({
            name,
            abbr
        })
        await genre.save();
        res.status(200).json(genre);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
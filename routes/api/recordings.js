const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Recording = require ('../../models/Recording');
const User = require('../../models/User');
const Genre = require('../../models/Genre');

//@route api/recordings/myrecordings
//get users recordings
//public
router.get('/', auth, async (req, res) => {
    const limit = req.query.limit || 500;
    const skip = req.query.skip || 0;
    try {
        const recordings = await Recording.find({user: req.user.id}).populate('user').limit(limit).skip(skip).exec();
        res.statusCode = 200;
        res.json(recordings);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});



//@route api/recordings
//test route
//public
router.get('/', async (req, res) => {
    const limit = req.query.limit || 500;
    const skip = req.query.skip || 0;
    try {
        const recordings = await Recording.find().populate('user').limit(limit).skip(skip).exec();
        res.statusCode = 200;
        res.json(recordings);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//@route api/recordings/:recordingId
//get one recording by ID
//public
router.get('/:recordingId', async (req, res) => {
    try {
        const recording = await Recording.findOne({user: req.params.recordingId}).populate('user').limit(limit).skip(skip).exec();
        if (!recording) {
            return res.status(400).json({msg: "There is not recording for this id"});
        };
        res.status(200).json(recording);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//@route api/recordings/:userId
//get all recordings for user
//public
router.get('/:userId', async (req, res) => {
    const limit = req.query.limit || 500;
    const skip = req.query.skip || 0;
    try {
        const recordings = await Recording.find({user: req.params.userId}).populate('user').limit(limit).skip(skip).exec();
        if (!recordings) {
            return res.status(400).json({msg: "There are no recordings for this user"});
        };
        res.status(200).json(recording);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
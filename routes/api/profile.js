const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Genre = require('../../models/Genre');

//@route api/profile/myprofile
//get users profile
//public
router.get('/myprofile', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'first_name', 'last_name']);
        if (!profile) {
            return res.status(400).json({msg: "There is not profile for this user"})
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }

});

module.exports = router;
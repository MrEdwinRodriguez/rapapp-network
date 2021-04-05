const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Genre = require('../../models/Genre');

//@route api/profile/myprofile
//get users profile
//private
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

//@route api/profile
//Post create or update profile
//private

router.post('/', auth, async (req, res) => {
        try {
            
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error') 
        }

        const { username, bio, phone_number, address, address2, city, state_province_name, postal_code, level, overall_score, youtube, facebook, twitter, linkedin, instagram } = req.body;
        
        const profileFields ={};
        profileFields.user = req.user.id;
        if (username) profileFields.username = username;
        if (bio) profileFields.bio = bio;
        if (level) profileFields.level = level;
        if (overall_score) profileFields.overall_score = overall_score;
        if (phone_number) profileFields.phone_number = phone_number;
        if (address) profileFields.address = address;
        if (address2) profileFields.address2 = address2;
        if (city) profileFields.city = city;
        if (state_province_name) profileFields.state_province_name = state_province_name;
        if (postal_code) profileFields.postal_code = postal_code;
        profileFields.social = {};
        if (youtube) profileFields.social.youtube = youtube;
        if (facebook) profileFields.social.facebook = facebook;
        if (twitter) profileFields.social.twitter = twitter;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;
        try {
            let profile = await Profile.findOne({user: req.user.id});
            console.log(profileFields)
            if (profile) {
                profile.modified_on = new Date();
                profile = await Profile.findOneAndUpdate(
                    {user: req.user.id},
                    { $set: profileFields },
                    { new: true }
                );
                return res.json(profile);
            }
            profileFields.created_on = new Date();
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
});

//@route api/profile
//get all profiles
//private
router.get('/', auth, async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'first_name', 'last_name', 'status']);
        res.json(profiles);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})

//@route api/profile/user/:user_id
//get prpfile by user_id
//private
router.get('/user/:user_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id}).populate('user', ['name', 'first_name', 'last_name', 'status']);
        if (!profile) return res.status(400).json({ msg: "Profile Not Found"});
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        if (error.kind == 'ObjectId') return res.status(400).json({ msg: "Profile Not Found"});
        res.status(500).send('Server Error')
    }
})

module.exports = router;
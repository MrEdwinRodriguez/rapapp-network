const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'users'},
	text: {type: String, required: true},
	name: {type: String },
	profileImage: { type: String }, 
}, {
    timestamps: true
});

const RecordingScheme = new Schema ({
	user: { type: Schema.Types.ObjectId, ref: 'users'},
    profile: { type: Schema.Types.ObjectId, ref: 'profile'},
    recordingLink: {type: String},
	description: { type: String, required: true },
	title: {type: String },
	profileImage: { type: String },
	likes: [{ user: { type: Schema.Types.ObjectId, ref: 'users'} }],
	comments: [commentSchema],
	date: { type: Date, default: Date.now },
},{
    timestamps: true
})

module.exports = Recording = mongoose.model('Recording', RecordingScheme);
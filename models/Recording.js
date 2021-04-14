const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordingScheme = new Schema ({
	user: { type: Schema.Types.ObjectId, ref: 'users'},
    profile: { type: Schema.Types.ObjectId, ref: 'profile'},
    recordingLink: {type: String},
	description: { type: String, required: true },
	title: {type: String },
	profileImage: { type: String },
	likes: [{ user: { type: Schema.Types.ObjectId, ref: 'users'} }],
	comments: [
		{ 
			user: { type: Schema.Types.ObjectId, ref: 'users'},
			text: {type: String, required: true},
			name: {type: String },
			profileImage: { type: String }, 
			date: { type: Date, default: Date.now },
			updated: { type: Date }
		}
		],
	date: { type: Date, default: Date.now },
	updated: { type: Date }
})

module.exports = Post = mongoose.model('post', RecordingScheme);
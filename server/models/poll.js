var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PollSchema = new mongoose.Schema({
	name: String,
	question: {type: String, min: 8},
	option1: [{name: {type: String, min: 3}, votes: {type: Number, default: 0}}],
	option2: [{name: {type: String, min: 3}, votes: {type: Number, default: 0}}],
	option3: [{name: {type: String, min: 3}, votes: {type: Number, default: 0}}],
	option4: [{name: {type: String, min: 3}, votes: {type: Number, default: 0}}],
	date_posted: {type: Date, default: Date.now }
})

mongoose.model('Poll', PollSchema)
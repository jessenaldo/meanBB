var mongoose = require('mongoose');
Poll = mongoose.model('Poll');

module.exports = (function() {
	return {
		index: function(req, res) {
			Poll.find({}, function(err, polls) {
				if(err) {
					console.log(err);
				} else {
				return res.json(polls)
				}
			})
		},
		create: function(req, res) {
			console.log(req.body)

			var poll = new Poll({ name: req.body.name, question: req.body.question})

			poll.option1.push({name: req.body.option1})
			poll.option2.push({name: req.body.option2})
			poll.option3.push({name: req.body.option3})
			poll.option4.push({name: req.body.option4})

			poll.save(function(err) {
				if(err) {
					res.json(err)
				} else {
					res.json(poll);
				}
			})

		},
		show: function(req, res) {
			console.log(req.params.id)

			Poll.findOne({ _id: req.params.id}, function(err, poll) {
				if(err) {
					res.json(err)
				} else {
					console.log(poll)
					res.json(poll)
				}
			})

		},
		vote: function(req, res) {
			
			console.log(req.body)

			Poll.findOne({ _id: req.body.pollId}, function(err, poll) {
				if(err) {
					res.json(err)
				} else {
					
					if(poll.option1[0]._id == req.body.optionId) {

						poll.option1[0].votes += 1;
						poll.save();
						res.json(poll);
						


					
					} else if (poll.option2[0]._id == req.body.optionId) {
						poll.option2[0].votes += 1;
						poll.save()
						res.json(poll)
					} else if (poll.option3[0]._id == req.body.optionId) {
						poll.option3[0].votes += 1;
						poll.save()
						res.json(poll)
					} else if (poll.option4[0]._id == req.body.optionId) {
						poll.option4[0].votes += 1;
						poll.save()
						res.json(poll)
					}


				}
			})

		},
		delete: function(req, res) {
			
			console.log(req.body._id)

			Poll.remove({_id: req.body._id}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.json("Successfully deleted")
				}
			})

		}
	}

})()
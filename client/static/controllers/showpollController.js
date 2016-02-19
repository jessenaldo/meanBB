poll_app.controller('showpollController', function($routeParams, $location, $cookies, pollFactory) {

	this.poll = {};
	console.log(this.poll._id)

	this.pollId = $routeParams.pollId
	console.log(this.pollId)

	var _this = this;
	pollFactory.show(this.pollId, function(data) {
		console.log(data);
		_this.poll = data;
	})

	this.voteOption1 = function() {

		this.sendVote = {};
		console.log(this.pollId)
		this.sendVote.pollId = this.pollId
		this.sendVote.optionId = this.poll.option1[0]._id
		console.log(this.sendVote);

		var _this = this;
		pollFactory.vote(this.sendVote, function() {


			pollFactory.show(_this.pollId, function(data) {
				console.log(data);
				_this.poll = data;
			})

		})

	}

	this.voteOption2 = function() {

		this.sendVote = {};
		console.log(this.pollId)
		this.sendVote.pollId = this.pollId
		this.sendVote.optionId = this.poll.option2[0]._id
		console.log(this.sendVote);

		var _this = this;
		pollFactory.vote(this.sendVote, function() {


			pollFactory.show(_this.pollId, function(data) {
				console.log(data);
				_this.poll = data;
			})

		})

	}

	this.voteOption3 = function() {


		this.sendVote = {};
		console.log(this.pollId)
		this.sendVote.pollId = this.pollId
		this.sendVote.optionId = this.poll.option3[0]._id
		console.log(this.sendVote);

		var _this = this;
		pollFactory.vote(this.sendVote, function() {


			pollFactory.show(_this.pollId, function(data) {
				console.log(data);
				_this.poll = data;
			})

		})
	}

	this.voteOption4 = function() {


		this.sendVote = {};
		console.log(this.pollId)
		this.sendVote.pollId = this.pollId
		this.sendVote.optionId = this.poll.option4[0]._id
		console.log(this.sendVote);

		var _this = this;
		pollFactory.vote(this.sendVote, function() {


			pollFactory.show(_this.pollId, function(data) {
				console.log(data);
				_this.poll = data;
			})

		})
	}

})
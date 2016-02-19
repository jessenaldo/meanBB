poll_app.controller('dashboardController', function(pollFactory, $cookies, $location) {

	this.user = $cookies.get('userName');

	this.polls = [];




	var _this = this;
	pollFactory.index(function(data) {
		console.log(data);
		_this.polls = data;
	})

	this.deletePoll = function(poll) {

		console.log(poll);
		console.log(poll._id)
		var pollId = poll._id

		var _this = this;
		//why does this not work???
		//pollfactory.delete(poll._id, function() {})
		pollFactory.delete( poll , function() {

			pollFactory.index(function(data) {
				console.log(data);
				_this.polls = data;
			})
		})

	}


})
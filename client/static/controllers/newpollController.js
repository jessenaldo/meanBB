poll_app.controller('newpollController', function($cookies, $location, pollFactory) {




	this.createPoll = function() {
		
		console.log(this.newPoll)


		var createPollValidation = true;

		this.newPoll.name = $cookies.get('userName')

		pollFactory.create(this.newPoll)

		$location.path('/dashboard');

			
		this.newPoll = {};

	}


})
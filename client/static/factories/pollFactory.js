poll_app.factory('pollFactory', function($http) {
	factory = {};

	polls = [];

	factory.index = function(callback) {
		$http.get('/polls').success(function(output) {
			polls = output;

			callback(output);
		})
	}

	factory.create = function(info) {
		$http.post('/polls', info).success(function(output) {
			console.log('Received from poll create')
			console.log(output);
		})
	}

	factory.show = function(info, callback) {
		$http.get('/polls/'+info).success(function(output) {
			console.log(output)
			callback(output)
		})
	}

	factory.vote = function(info, callback) {
		console.log(info)
		$http.post('/polls/vote', info).success(function(output) {
			console.log(output)
			callback(output)
		})
	}

	factory.delete = function(info, callback) {
		console.log(info);
		$http.post('/polls/delete/', info).success(function(output) {
			console.log(output);
			callback(output);
		})
	}

	return factory;
})
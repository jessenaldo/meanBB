poll_app.controller("userController", function($cookies, $location) {

	this.go = function(path) {
		$location.path(path)
	}

	console.log($cookies.get('userName'))
	if ($cookies.get('userName')) {
		$cookies.remove('userName')
		console.log($cookies.get('userName'))
	}

	this.setUser = function() {
		$cookies.put('userName', this.newUser.name);
		this.newUser = {};
		this.go('/dashboard')
	}
})
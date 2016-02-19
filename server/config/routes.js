var polls = require('./../controllers/polls.js');

module.exports = function(app) {

	app.get('/polls', function(req, res) {
		polls.index(req, res)
	})

	app.post('/polls', function(req, res) {
		polls.create(req, res)
	})

	app.get('/polls/:id', function(req, res) {
		polls.show(req, res)
	})
	
	app.post('/polls/vote', function(req, res) {
		polls.vote(req, res)
	})

	app.post('/polls/delete', function(req, res) {
		console.log(req.body)
		polls.delete(req, res)
	})

}
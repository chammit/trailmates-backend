const Controllers = require('../controllers');

// NOTE: C 5/17/2023 - Initially place get/post/delete type endpoints here before putting each section (trails/users/etc) in separate files
const routes = (app) => {
	app.route('/trails')
		// GET all trails
		.get(Controllers.getTrails)
		// POST new trail
		.post(Controllers.addNewTrail);
	app.route('/trails/:trailId')
		// GET specific trail
		.get(Controllers.getTrailWithId)
		.put(Controllers.updateTrail)
		.delete((req, res) => {
			res.send('DELETE request sucessful!');
		});
	// app.route('/users');
	// app.route('/posts');
	// app.route('/messages');
};

module.exports = routes;
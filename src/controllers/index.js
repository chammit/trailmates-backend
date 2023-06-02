const mongoose = require('mongoose');
const mySchemas = require('../models');

const Trail = mongoose.model('Trail', mySchemas.TrailsSchema);

exports.addNewTrail = async (req, res) => {
	let newTrail = new Trail(req.body);

	await newTrail.save().then((trail) => {
		console.log("Trail saved");
		res.json(trail);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
};
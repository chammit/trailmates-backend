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

exports.getTrails = async (req, res) => {
	await Trail.find({}).then((trail) => {
		res.json(trail);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
};

exports.getTrailWithId = async (req, res) => {
	await Trail.findById(req.params.trailId).then((trail) => {
		res.json(trail);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
};

exports.updateTrail = async (req, res) => {
	// { new: true } means response will show the newly updated version instead of the original
	await Trail.findOneAndUpdate({ _id: req.params.trailId }, req.body, { new: true }).then((trail) => {
		res.json(trail);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
};
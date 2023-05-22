const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.TrailsSchema = new Schema({
	name: {
		type: String,
		required: 'Enter a trail name',
		unique: true
	},
	location: {
		city: {
			type: String,
			required: 'Enter a city'
		},
		state: {
			type: String,
			required: 'Enter a state'
		}
	},
	difficulty: {
		type: Number,
		min: 1,
		max: 5
	},
	// TODO: C 5/21/2023 - Maybe do a type of enum (from mysql) with options for every .5 hours
	// duration: {
	// 	type: ,
	// },
	description: {
		type: String,
	},
	// Look into using the Arrays schema type for things like ratings/comments
	ratings: {
		rating: {
			type: Number,
			min: 1,
			max: 5
		}
	},
	comments: {
		comment: {
			type: String
		}
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	hidden: {
		type: Boolean
	} 
});

// TODO: C 5/21/2023 - Do we even need stuff like 'trailId, userId' in mongodb?
// Trails: trailId, name, city, state, difficulty (could be a 1-5 rating or novice, beginner, competent, proficient, expert), estimated duration, description, warnings (potential dangers to watch out for), user ratings (maybe with written review section as well), comments from users, hidden (to flag whether the trail should show up to users or not), type (hiking, biking, other, multiple), distance
// Users: userId, username, email, password (hashed and all that with jwt and such)
// Events: eventId, title, date, description, type (hiking, biking, picnic, meet & greet), attendees (yes, no, maybe)
// Messages: need to figure out what capacity messages will exist on the site. Will events have a chatroom? User DM's? Group chats? Will there be clubs and will those have group chats? Will messages be deleted after 'x' amount of time?

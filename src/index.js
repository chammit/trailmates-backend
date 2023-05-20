const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/trailmates', {
	useNewUrlParser: true,
	// useUnifiedTopology: true
});

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
// 	console.log("Connected to MongoDB successfully");
// });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}`);
});
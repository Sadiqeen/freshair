const express = require("express");
const app = express();
const cors = require('cors')
const port = 8000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/"; // always add / end of link
const databaseName = "TestFreshAir";
const collection = "contact";
mongoose.connect(url + databaseName, { useNewUrlParser: true, useUnifiedTopology: true });

const Contact = mongoose.model('Contact', {
	name: String,
	email: String,
	title: String,
	body: String,
});

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.post("/contact", jsonParser, (req, res, next) => {

	try {
		const new_contact = new Contact({
			name: req.body.name,
			email: req.body.email,
			title: req.body.title,
			body: req.body.body,
		});

		new_contact.save().then(() => res.json({
			"status": "success"
		}));
	} catch (error) {
		console.log(`Error log : ${error}`);
		res.status(500);
	}

});

app.get("/contact", async (req, res) => {
	
	try {
		const result = await Contact.find({});
		res.send(result);
	} catch (error) {
		console.log(`Error log : ${error}`);
		res.status(500);
	}


});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
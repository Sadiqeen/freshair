const express = require("express");
const app = express();
const cors = require('cors')
const port = 8000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const databaseName = "TestFreshAir";
const collection = "contact";

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.post("/contact", jsonParser, (req, res, next) => {
	MongoClient.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then((db) => {
			const dbo = db.db(databaseName);
			const contact_data = {
				name: req.body.name,
				email: req.body.email,
				title: req.body.title,
				body: req.body.body,
			};

			dbo.collection(collection).insertOne(contact_data, function (err, result) {
				if (err) {
					throw err
				} else {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/plain');
					res.json({
						"status": "success"
					});
				}
				db.close();
			});
		})
		.catch(function (err) {
			throw err
		})
});

app.get("/contact", (req, res) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;

		const dbo = db.db(databaseName);
		dbo
			.collection(collection)
			.find()
			.toArray(function (err, result) {
				res.send(result);
				db.close();
			});
	});
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
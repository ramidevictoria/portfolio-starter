require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function(req, res) {
	res.status(200).send("hello world");
})

var listener = app.listen(process.env.PORT, function() {
	console.log(':)');
})

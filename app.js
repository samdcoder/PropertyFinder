const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000; 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/userRegister', (req, res) => {
	console.log(req.body)
	res.send('fun');
});

app.post('/ownerRegister', (req, res) => {
	console.log(req.body);
	return;
});

app.listen(PORT, () => {
	console.log('listening on PORT', PORT);
});


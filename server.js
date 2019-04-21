const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const users = require('./routes/api/users');
const forms = require('./routes/api/forms');
const admins = require('./routes/api/admins');
const fakeServer = require('./routes/api/fakeServer');
const externalentities = require('./routes/api/externalentities');
const nationalities = require('./routes/api/nationalities');
const governorates = require('./routes/api/governorates');
const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
	.connect('mongodb+srv://ScrumMaster:26312215@int-elligence-s1doh.mongodb.net/local_library?retryWrites=true')
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));
{
	useNewUrlParser: true;
}

// //Static file declaration
// app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	//
	app.get('*', (req, res) => {
		res.sendfile(path.join(((__dirname = 'client'), 'build', 'index.html')));
	});
}

//build mode
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

// Init middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//app.use(express.multipart());
app.use(cors());

// Direct routes to appropriate files
app.use('/routes/api/users', users);
app.use('/routes/api/forms', forms);
app.use('/routes/api/admins', admins);
app.use('/routes/api/externalentities', externalentities);
app.use('/routes/api/nationalities', nationalities);
app.use('/routes/api/governorates', governorates);

app.use('/routes/api/fakeServer', fakeServer);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Handling 404
app.use((req, res) => {
	res.status(404).send({ err: 'We can not find what you are looking for' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));

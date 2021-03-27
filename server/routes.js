module.exports = function(app){
	// Our model controllers (rather than routes)
	const users = require('./routes/users');
	const trips = require('./routes/trips');
	const search = require('./routes/search');

	const authCheckMiddleware = require('./config/middleware/authCheck');
	app.use('/apis/trips', authCheckMiddleware);
	app.use('/apis/contacts', authCheckMiddleware);
	app.use('/apis/search', authCheckMiddleware);

	app.use('/apis/users', users);
	app.use('/apis/trips', trips);
	app.use('/apis/search', search)
	//other routes..
}
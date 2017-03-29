var express = require('express'),
	router  = express.Router(),
	proxy   = require('express-http-proxy'),
	Article = require('../models/article');

module.exports = function (app) {
	app.use('/', router);
	
	//proxy
	app.use('/api', proxy('localhost:3000', {
		forwardPath: function(req) {
			return require('url').parse(req.url).path;
		}
	}));
};

//page
router.get('/', function (req, res, next) {
	res.render('home', {
		title: 'EXPRESS HOME'
	});
});

router.get('/*', function (req, res) {
	res.render(req.path.substr(1),{
		title: 'EXPRESS PAGE'
	});
})
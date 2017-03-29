var express = require('express'),
	router  = express.Router(),
	proxy   = require('express-http-proxy'),
	engine = require('ejs-locals'),
	Article = require('../models/article');



module.exports = function (app) {
	app.use('/', router);
	app.engine('ejs', engine);
};

router.get('/', function (req, res, next) {
	res.render('home', {
		title: 'Generator-Express MVC'
	});
});

router.use('/api', proxy('localhost:3000', {
	forwardPath: function(req) {
		console.log("require('url').parse(req.url).path",require('url').parse(req.url).path)
		return require('url').parse(req.url).path;
	}
}));

router.get('/:path', function (req, res) {
	res.render(req.params.path,{
		title: 'Generator-Express MVC'
	});
})


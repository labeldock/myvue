var express = require('express'),
	router  = express.Router(),
	proxy   = require('express-http-proxy');

module.exports = function (app) {
	app.use('/', router);
};

//proxy
router.use('/api', proxy('localhost:3000', {
	forwardPath: function(req) {
		return require('url').parse(req.url).path;
	}
}));

//page
router.get('/*', function (req, res, next) {
	res.locals.pathtoken = req.path.substr(1).replace("\/","-");
	next();
});

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
var express = require('express')
  , __ = require('underscore')
  , io = require('socket.io').listen(8080/*, {log: false}*/)
  , async = require('async')
  , api = require('./api.js')
  , app = express()
  ;

io
	.set('log level', 2)
	.sockets.on('connection', function (socket) {
		socket.on('msg', function (data) {
			socket.emit('msg', {
				id: socket.id,
				msg: data.msg
			});
		});
	})
	;

app
	.get('/api/*', function (req, res) {
		res.send(api.response(req.originalUrl.match(/^\/api\/(.*)$/)[1]));
	})
	.use(express.static('../ilmon_c'))
	.listen(80, function () {
		console.log('app running on localhost:80');
	})
	;
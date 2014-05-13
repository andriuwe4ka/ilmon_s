var modules = {
		def: require('./def.js')
	}
  ;
exports.response = function (url, params) {
	return modules[url.split('/')[0].split('.')[0]][url.split('/')[0].split('.')[1]](params);
};
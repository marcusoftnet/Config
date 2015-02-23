var mongoProdUri = process.env.MONGOLAB_URI || 'localhost:27017/myApp_Prod';

var adminUser = {
	name : process.env.BASIC_USER || 'marcus',
	pass : process.env.BASIC_PASS || 'koavote'
};

var config = {
	local: {
		mode: 'local',
		port: 3000,
		mongoUrl: 'localhost:27017/myApp_Dev',
		user : adminUser
	},
	staging: {
		mode: 'staging',
		port: 4000,
		mongoUrl: 'localhost:27017/myApp_Test',
		user : adminUser
	},
	prod: {
		mode: 'prod',
		port: process.env.PORT || 5000,
		mongoUrl: mongoProdUri,
		user : adminUser
	}
};

module.exports = function (mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};
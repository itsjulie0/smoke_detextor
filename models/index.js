var	mongoose 	= require('mongoose'),
	dotenv		= require('dotenv');

dotenv.config();

mongoose.set('debug', true);
mongoose.connect(process.env.DATABASE);
console.log(process.env.DATABASE);
mongoose.promise = Promise;

module.exports.userInfo = require('./info');